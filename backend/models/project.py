"""
Pydantic Veri Modelleri ve Şemalar
"""
from typing import List, Optional
from pydantic import BaseModel

class CaseStudyModel(BaseModel):
    problem: str
    architecture: str
    keyChallenge: str
    features: List[str]

class ProjectModel(BaseModel):
    id: str
    title: str
    category: str
    categoryLabel: str
    badge: str
    summary: str
    highlightMetric: str
    techStack: List[str]
    githubUrl: Optional[str] = None
    demoUrl: Optional[str] = None
    caseStudy: CaseStudyModel

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str
