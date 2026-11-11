const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    nav.classList.toggle('is-open', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', '메뉴 열기');
    });
  });
}

const scopeChips = Array.from(document.querySelectorAll('.scope-chip'));
const copyButton = document.getElementById('copy-contact');
const contactNote = document.getElementById('contact-note');
const briefPreview = document.getElementById('brief-preview');

function getSelectedScopes() {
  return scopeChips
    .filter(chip => chip.classList.contains('is-selected'))
    .map(chip => chip.dataset.scope)
    .filter(Boolean);
}

function buildInquiryBrief(scopes) {
  const listText = scopes.length > 0
    ? scopes.map((item, idx) => `${idx + 1}. ${item}`).join('\n')
    : '1. 전반적인 도입 방향 상담';
  return [
    '[DNA AI 프로젝트 사전 검토 브리프]',
    `- 검토 희망 분야:\n${listText}`,
    '- 현재 보유 채널(웹사이트/SNS URL): ',
    '- 목표 일정 및 핵심 해결 과제: '
  ].join('\n');
}

scopeChips.forEach(chip => {
  chip.addEventListener('click', () => {
    const next = !chip.classList.contains('is-selected');
    chip.classList.toggle('is-selected', next);
    chip.setAttribute('aria-pressed', String(next));
    if (briefPreview && !briefPreview.hidden) {
      briefPreview.textContent = buildInquiryBrief(getSelectedScopes());
    }
  });
});

if (copyButton && contactNote) {
  copyButton.addEventListener('click', async () => {
    const brief = buildInquiryBrief(getSelectedScopes());
    if (briefPreview) {
      briefPreview.textContent = brief;
      briefPreview.hidden = false;
    }
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(brief);
        contactNote.textContent = '선택하신 항목 기준의 사전 검토 브리프를 클립보드에 복사했습니다. 공식 채널 개통 시 바로 붙여넣어 문의하실 수 있습니다.';
        return;
      }
    } catch {
      // Fallback notice below
    }
    contactNote.textContent = '아래 사전 검토 브리프가 생성되었습니다. 텍스트를 복사해 공식 상담 시 활용해 주세요.';
  });
}
