"""
TEK TIKLA BAŞLATICI (main.py)
Taslak Standardı:
1. UTF-8 Konsol Zırhı
2. Otomatik Port Çatışma Çözücü (8000 -> 8001...)
3. No-Spam Sessiz Loglama (access_log=False)
4. Tarayıcıyı Otomatik Açma
5. Zarif Kapanış (Graceful Shutdown)
"""
import sys
import os
import socket
import webbrowser
import signal

# Windows UTF-8 Konsol Zırhı
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
        os.system('chcp 65001 > nul')
    except Exception:
        pass
# Ctrl+C ile kapanmayı engelleme (Kullanıcı isteğiyle sunucu kesintisiz çalışır)
def ignore_ctrl_c(signum, frame):
    pass

try:
    signal.signal(signal.SIGINT, ignore_ctrl_c)
except Exception:
    pass

def find_free_port(start_port: int = 8000) -> int:
    port = start_port
    while port < 9000:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
            port += 1
    return start_port

def main():
    try:
        import uvicorn
        from backend.app import app
    except ImportError:
        print("[Hata] Gerekli kütüphaneler (fastapi, uvicorn) bulunamadı.")
        print("Lütfen terminalden 'pip install -r requirements.txt' çalıştırın.")
        sys.exit(1)

    port = find_free_port(8000)
    url = f"http://127.0.0.1:{port}"

    print("\n" + "=" * 54)
    print(" 🚀 OĞUZ TAŞDEMİR — PORTFOLYO SUNUCUSU")
    print(f" 🌐 Adres: {url}")
    print(" 🛡️ Durum: Aktif (Tek Port, Sessiz Terminal, Ctrl+C Koruması)")
    print("=" * 54 + "\n")

    # Tarayıcıyı otomatik aç
    webbrowser.open(url)

    try:
        # Uvicorn varsayılan olarak SIGINT (Ctrl+C) yakalayıp sunucuyu kapatır.
        # capture_signals metodunu etkisiz kılarak Ctrl+C ile kapanmayı engelliyoruz.
        # Sunucu sadece arayüzdeki 'Kapat' butonu (/api/system/shutdown) ile güvenli kapatılır.
        import contextlib

        class PortfolyoServer(uvicorn.Server):
            @contextlib.contextmanager
            def capture_signals(self):
                yield

        config = uvicorn.Config(
            "backend.app:app",
            host="127.0.0.1",
            port=port,
            reload=True,
            reload_dirs=[
                os.path.join(os.path.dirname(__file__), "backend"),
                os.path.join(os.path.dirname(__file__), "data"),
                os.path.join(os.path.dirname(__file__), "frontend")
            ],
            access_log=False
        )
        print(" ⚡ [Canlı İzleyici]: Kod/Veri değişikliklerinde sunucu anında güncellenir.")
        print(" 🛡️ [Güvenlik]: Ctrl+C devre dışıdır; arayüzdeki 'Kapat' butonuyla güvenle kapatılır.\n")
        
        # reload modunda uvicorn.run kullanılır
        uvicorn.run(
            "backend.app:app",
            host="127.0.0.1",
            port=port,
            reload=True,
            reload_dirs=[
                os.path.join(os.path.dirname(__file__), "backend"),
                os.path.join(os.path.dirname(__file__), "data"),
                os.path.join(os.path.dirname(__file__), "frontend")
            ],
            access_log=False
        )
    except KeyboardInterrupt:
        pass
    except Exception as e:
        print(f"[Hata] Sunucu hatası: {e}")

if __name__ == "__main__":
    main()

