# DNA AI 공식 웹사이트

AI 에이전트 연구개발, SaaS 서비스, 맞춤형 플랫폼 개발, SNS 자동화(Instagram · Threads), 네이버 검색 최적화(SEO) 및 생성형 AI 검색 가시성(GEO), AI 보안 솔루션을 소개하는 **DNA AI** 공식 정적 웹사이트입니다.

## 배포 정보
- **라이브 URL**: `https://alexchoi21.github.io/`
- **호스팅 방식**: GitHub Pages (`ALEXCHOI21/ALEXCHOI21.github.io`, `main` 브랜치 루트 정적 배포)

## SEO · GEO 적용 규격
- **크롤러 개방 (`robots.txt`)**: 네이버(`Yeti`), Google(`Googlebot`, `Google-Extended`), OpenAI(`OAI-SearchBot`, `ChatGPT-User`, `GPTBot`), Perplexity(`PerplexityBot`), Anthropic(`ClaudeBot`) 명시적 허용 및 `sitemap.xml` 경로 지정
- **구조화 데이터 (`Schema.org JSON-LD`)**: `ProfessionalService` + `WebSite` + `WebPage` + `FAQPage` 100% 팩트 기반 그래프 선언(허위 평점/연락처 미포함)
- **AI 가독성 (`llms.txt`)**: AI 검색엔진 및 에이전트용 핵심 서비스·프로세스 마크다운 요약 제공
- **Answer-First 콘텐츠**: 상단 정의문, HTML 시맨틱 비교표(`<table>`), 5대 핵심 FAQ 블록 배치
- **OpenGraph & Naver 준비**: `<link rel="canonical">`, `og:image`(`1200×630`), `<meta name="naver-site-verification">` 슬롯 구비

## 네이버 서치어드바이저 · 구글 서치콘솔 연동 안내
1. [네이버 서치어드바이저](https://searchadvisor.naver.com/)에서 `https://alexchoi21.github.io` 등록 후 HTML 메타태그(`naver-site-verification`) 발급
2. `index.html` `<head>`의 주석 슬롯에 발급받은 메타태그를 반영하고 `git push`
3. 서치어드바이저에서 소유확인 완료 후 `https://alexchoi21.github.io/sitemap.xml` 제출 및 `robots.txt` 수집 검증 실행
4. [Google Search Console](https://search.google.com/search-console) 및 [Bing Webmaster Tools](https://www.bing.com/webmasters)에도 동일 사이트맵 제출
