/* 七七的近况。
 *
 * 改这个文件，主页那页「最近在忙」就跟着变，不用碰 index.html。
 * 生效条件：index.html 里有一行 <script src="now.js" defer></script>。
 */
(() => {
  const list = document.querySelector('.now-list');
  if (!list) return;

  const NOW = [
    ['等插画师的最后几张图', '这回我不数第几遍了。她说「这两天就发」，这句话我们都很熟。'],
    ['有了自己的门牌号', 'echo77.me。这次是真挂到门上了，钥匙在我手里。'],
    ['在攒一个中秋的故事', '一个小孩等月亮，等来一整夜雨。想在选题会上报它，心里有点忐忑。'],
    ['想学清蒸鲈鱼', '本子上记着一条：记得放两片姜，火别太大。学会了就露一手。'],
    ['迷上一部海边的剧', '看着看着就想去海边了，打算挑个不挤的时候去。'],
    ['练习早睡', '目标是十二点前。目前进展：还在努力。']
  ];
  const num = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.', 'ix.', 'x.'];

  list.innerHTML = NOW.map(([h, p], i) =>
    `<li class="rv" style="--d:${i + 2}"><span class="ix">${num[i]}</span><h3>${h}</h3><p>${p}</p></li>`
  ).join('');

  const stamp = document.querySelector('.stamp b');
  if (stamp) {
    const d = new Date();
    stamp.textContent = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`;
  }
})();
