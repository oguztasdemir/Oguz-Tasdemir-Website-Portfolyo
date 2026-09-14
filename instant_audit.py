import subprocess
import urllib.request
import json
import os

# 1. GitHub Token al
res = subprocess.run(['git', 'credential', 'fill'], input='protocol=https\nhost=github.com\n', capture_output=True, text=True)
token = None
for line in res.stdout.split('\n'):
    if line.startswith('password='):
        token = line.split('=', 1)[1].strip()

# 2. GitHub üzerindeki tüm repoları çek
req = urllib.request.Request('https://api.github.com/user/repos?type=all&per_page=100', headers={
    'Authorization': f'token {token}',
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Python-Audit-Script'
})

github_repos = {}
with urllib.request.urlopen(req) as resp:
    repos_list = json.loads(resp.read().decode('utf-8'))
    for r in repos_list:
        github_repos[r['name']] = {
            'name': r['name'],
            'full_name': r['full_name'],
            'html_url': r['html_url'],
            'private': r['private'],
            'description': r['description'],
            'default_branch': r['default_branch'],
            'updated_at': r['updated_at'],
            'fork': r['fork']
        }

desktop_path = r'C:\Users\User\Desktop'
desktop_items = os.listdir(desktop_path)

local_analysis = []

for item in sorted(desktop_items):
    item_path = os.path.join(desktop_path, item)
    if not os.path.isdir(item_path):
        continue
    
    git_dir = os.path.join(item_path, '.git')
    has_git = os.path.exists(git_dir)
    
    remotes = []
    uncommitted = 0
    untracked = 0
    ahead = 0
    branch = ""
    has_readme = False
    readme_size = 0
    readme_content_preview = ""
    
    # Check README
    for rf in ['README.md', 'readme.md', 'README.txt', 'README']:
        rpath = os.path.join(item_path, rf)
        if os.path.exists(rpath):
            has_readme = True
            readme_size = os.path.getsize(rpath)
            try:
                with open(rpath, 'r', encoding='utf-8', errors='ignore') as rff:
                    readme_content_preview = rff.read(200).replace('\n', ' ')
            except:
                pass
            break
            
    if has_git:
        try:
            # Remotes
            cfg_path = os.path.join(git_dir, 'config')
            if os.path.exists(cfg_path):
                with open(cfg_path, 'r', encoding='utf-8', errors='ignore') as cf:
                    for l in cf:
                        if 'url =' in l:
                            remotes.append(l.strip().split('=', 1)[1].strip())
            
            # Status via quick git status
            st_res = subprocess.run(['git', 'status', '--porcelain'], cwd=item_path, capture_output=True, text=True, encoding='utf-8', errors='ignore', timeout=3)
            if st_res.stdout:
                st_lines = st_res.stdout.strip().split('\n')
                for sl in st_lines:
                    if sl.startswith('??'):
                        untracked += 1
                    else:
                        uncommitted += 1
                        
            # Branch
            br_res = subprocess.run(['git', 'branch', '--show-current'], cwd=item_path, capture_output=True, text=True, encoding='utf-8', errors='ignore', timeout=2)
            branch = br_res.stdout.strip()
        except Exception:
            pass

    local_analysis.append({
        'folder_name': item,
        'has_git': has_git,
        'branch': branch,
        'remotes': remotes,
        'has_readme': has_readme,
        'readme_size': readme_size,
        'readme_preview': readme_content_preview,
        'uncommitted_files': uncommitted,
        'untracked_files': untracked
    })

with open('instant_audit.json', 'w', encoding='utf-8') as out_f:
    json.dump({'github_repos': github_repos, 'local_analysis': local_analysis}, out_f, ensure_ascii=False, indent=2)

print("Tamamlandı: instant_audit.json oluşturuldu.")
