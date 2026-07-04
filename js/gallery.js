/* CUR8AFRICA — collection data, masonry render, filters, lightbox */
(function () {
  'use strict';


  var INQUIRY_EMAIL = 'info@allanafosterfinley.com';

  var ARTISTS = {
    'azael-langa':    { name: 'Azael Langa',      note: 'Smoke and gold leaf on canvas — messages of rebuilding and faith.' },
    'bambo-sibiya':   { name: 'Bambo Sibiya',     note: 'Monumental black-and-white linocuts celebrating South African women.' },
    'laziehound-coka':{ name: 'Layziehound Coka', note: 'Expressionist mixed media charged with graffiti energy and wit.' },
    'michael-selekane':{ name: 'Michael Selekane', note: 'Silkscreens on Fabriano chronicling township life and movement.' },
    'mncedi-madolo':  { name: 'Mncedi Madolo',    note: 'Layered newsprint collage on fringed textile — satire and myth.' },
    'ryan-shava':     { name: 'Ryan Shava',       note: 'Cubist-inflected portraits in saturated colour.' },
    'siphamandla-ex': { name: 'Siphamandla Ex',   note: 'Figures in bold fashion against black grounds strewn with gold flora.' },
    'steve-maphoso':  { name: 'Steve Maphoso',    note: 'Poetic meditations on love, memory and connection.' },
    'thamsanga':      { name: 'Thamsanga',        note: 'Portraits of township childhood on burlap and found blankets.' },
    'ayanda-moyo':    { name: 'Ayanda Moyo',      note: 'Identity and culture rendered against fields of gold.' }
  };

  var WORKS = [
    { a: 'azael-langa', f: '02.jpg', w: 1293, h: 1600, t: 'We Will Rebuild I', m: 'Smoke & gold leaf on canvas', alt: 'Smoke-drawn portrait of a smiling boy on a sky-blue ground holding a white sign reading "We Will Rebuild" in gold leaf.' },
    { a: 'azael-langa', f: '04.jpg', w: 1336, h: 1600, t: 'We Will Rebuild II', m: 'Smoke & gold leaf on canvas', alt: 'Smoke portrait of a young girl with braids on a bright blue ground holding a sign reading "We Will Rebuild" in gold leaf.' },
    { a: 'azael-langa', f: '03.jpg', w: 1200, h: 1600, t: 'Nothing Will Be Impossible', m: 'Smoke & gold leaf on canvas', alt: 'Smoke-rendered boy on white holding a placard reading "For with God nothing will be impossible, Luke 1:37" in gold.' },
    { a: 'azael-langa', f: '05.jpg', w: 1213, h: 1600, t: 'A New Generation', m: 'Smoke & gold leaf on canvas', alt: 'Smoke drawing of a couple holding a gold-lettered sign about birthing a new generation, the woman carrying a small blue house.' },

    { a: 'bambo-sibiya', f: '05.jpg', w: 1600, h: 1115, t: 'Veiled Queen in Meditation', m: 'Linocut', alt: 'Linocut of a woman in an elaborate lace veil, rose crown and layered beads, seated with open palms in a meditative pose.' },
    { a: 'bambo-sibiya', f: '01.jpg', w: 1106, h: 1600, t: 'Daughters of the Continent', m: 'Linocut', alt: 'Black-and-white linocut of two women, one crowned with roses, before a backdrop of repeating Africa-continent medallions.' },
    { a: 'bambo-sibiya', f: '02.jpg', w: 1100, h: 1600, t: 'Sisters in Patterned Embrace', m: 'Linocut', alt: 'Black-and-white linocut of two braided women in patterned garments embracing against an embossed daisy background.' },
    { a: 'bambo-sibiya', f: '03.jpg', w: 1600, h: 1120, t: 'Adorned', m: 'Linocut', alt: 'Linocut of two adorned women, one with a sculptural coiled headdress and one crowned with roses, against a floral band.' },
    { a: 'bambo-sibiya', f: '04.jpg', w: 1600, h: 1115, t: 'Seated in Bloom', m: 'Linocut', alt: 'Black-and-white linocut of two seated women with braided updos in floral dresses before a damask-patterned band.' },

    { a: 'laziehound-coka', f: '05.jpg', w: 960, h: 1280, t: 'Eight Billion Likes', m: 'Mixed media', alt: 'Painting of a haloed jazz trumpeter in a red suit framed as an Instagram post showing over eight billion likes.' },
    { a: 'laziehound-coka', f: '03.jpg', w: 1030, h: 1280, t: 'Fractured Portrait', m: 'Mixed media', alt: 'Fragmented expressionist portrait of a woman with a red hoop earring, her face split by intersecting lines and shifted planes.' },
    { a: 'laziehound-coka', f: '02.jpg', w: 1156, h: 1280, t: 'Octopus on Red', m: 'Mixed media on unstretched canvas', alt: 'Deep-red unstretched canvas with a painted orange octopus wrapped around graffiti lettering and abstract marks.' },
    { a: 'laziehound-coka', f: '04.jpg', w: 591, h: 707, t: 'If Love Is a Place', m: 'Mixed media', alt: 'Abstract painting in earth tones and blue crossing lines with the handwritten words "If love is a place, mom, I\'m coming home".' },
    { a: 'laziehound-coka', f: '06.jpg', w: 463, h: 556, t: 'Devolve', m: 'Mixed media', alt: 'Abstract composition in gold, pink and orange with a dotted black arc, orange triangle and mirrored word "DEVOLVE".' },

    { a: 'michael-selekane', f: '02.jpg', w: 1280, h: 519, t: 'Aspirations', m: 'Silkscreen on Fabriano · 2025 · Ed. 3/5', alt: 'Black-and-white silkscreen of a row of silhouetted figures with bowed heads holding open books, one figure standing apart.' },
    { a: 'michael-selekane', f: '03.jpg', w: 1280, h: 884, t: 'Global Village', m: 'Silkscreen on Fabriano · 2024 · Ed. 4/5', alt: 'Densely sketched silkscreen of a vast crowd of women in headscarves stretching to the horizon, in black ink on cream.' },
    { a: 'michael-selekane', f: '04.jpg', w: 1280, h: 913, t: 'Last Song', m: 'Silkscreen on Fabriano · 2015 · Ed. 1/1', alt: 'Silkscreen print of an immense crowd singing together, the front figures with hands pressed to their chests.' },
    { a: 'michael-selekane', f: '05.jpg', w: 1280, h: 580, t: 'Tshepo', m: 'Silkscreen on Fabriano · 2025 · Ed. 1/1', alt: 'Minimal black-and-white silkscreen of a cluster of minibus taxis with luggage on their roofs against a pale background.' },
    { a: 'michael-selekane', f: '06.jpg', w: 1280, h: 807, t: 'Where Are We Going (Re ya kae)', m: 'Silkscreen on Fabriano · 2015 · Ed. 1/1', alt: 'Wide silkscreen of a line of minibus taxis with cyclists passing in front, inscribed in pencil "Re ya kae (where are we going)".' },
    { a: 'michael-selekane', f: '07.jpg', w: 1280, h: 895, t: 'Mabopane', m: 'Silkscreen on Fabriano · 2014 · Ed. 1/3', alt: 'Expressive black-ink silkscreen of a township street with figures, trees, makeshift structures and a pushcart under dappled shade.' },

    { a: 'mncedi-madolo', f: '02.jpg', w: 866, h: 1111, t: 'Woman with Golden Halo', m: 'Collage on fringed textile', alt: 'Mixed-media collage of a woman gazing upward, layered with newspaper scraps, a painted halo and cartoon clouds.' },
    { a: 'mncedi-madolo', f: '05.jpg', w: 1107, h: 1280, t: 'Gold 3D Glasses', m: 'Collage on fringed textile', alt: 'Collage of a woman wearing painted gold 3D glasses, with a cartoon glove hand, cattle silhouettes and archival photographs.' },
    { a: 'mncedi-madolo', f: '03.jpg', w: 1104, h: 1280, t: 'Painted Face Amid Newsprint', m: 'Collage on fringed textile', alt: 'Collage of a face with white traditional face paint tilted skyward, surrounded by Daily Sun newsprint and a sketched monitor.' },
    { a: 'mncedi-madolo', f: '04.jpg', w: 1104, h: 1280, t: 'Turquoise Balaclava', m: 'Collage on fringed textile', alt: 'Collage of a figure wearing a turquoise balaclava drawn over a photographic portrait, set against weathered newsprint and clouds.' },
    { a: 'mncedi-madolo', f: '06.jpg', w: 885, h: 1111, t: 'Claims: Sweet and Sour', m: 'Collage on fringed textile', alt: 'Collage of a crouching figure crowned with a feathered headdress, over a map, spray-paint clouds, cattle and banknote sketches.' },

    { a: 'ryan-shava', f: '04.jpg', w: 959, h: 1280, t: 'Zimbabwean Mermaid', m: 'Gouache on paper', alt: 'Cubist-style painting of a green-haired figure with fractured profile faces on a teal background.' },
    { a: 'ryan-shava', f: '03.jpg', w: 960, h: 1280, t: 'The Lady with a Green Shirt', m: 'Gouache on paper', alt: 'Cubist-style gouache portrait of a woman with blue-striped hair and a fragmented multicoloured face.' },
    { a: 'ryan-shava', f: '06.jpg', w: 960, h: 1280, t: 'The Second Oyster', m: 'Gouache on paper', alt: 'Cubist-style painting of a blue-faced figure with red lips and a green ringed eye on a bright red background.' },
    { a: 'ryan-shava', f: '05.jpg', w: 1280, h: 1241, t: 'The Glass Eyed Boy', m: 'Gouache on paper', alt: 'Cubist-style portrait of a boy with one large realistic eye and one blue abstract eye against dark green.' },
    { a: 'ryan-shava', f: '07.jpg', w: 1200, h: 1600, t: 'Studio Earl Portrait III', m: 'Gouache on paper', alt: 'Colourful abstract portrait of an angular face with layered eyes and teeth on an orange-yellow ground.' },

    { a: 'siphamandla-ex', f: '05.jpg', w: 1051, h: 1280, t: 'Man in Lavender', m: 'Acrylic on canvas', alt: 'Painting of a man in a lavender suit and newsboy cap before a black background of stylised gold, white and grey flowers.' },
    { a: 'siphamandla-ex', f: '06.jpg', w: 1117, h: 1280, t: 'Woman in Lavender', m: 'Acrylic on canvas', alt: 'Painting of a woman in a lavender bucket hat and dress, her face in shadow, surrounded by gold and white flowers on black.' },
    { a: 'siphamandla-ex', f: '07.jpg', w: 1200, h: 1206, t: 'Man in Green, Leaning', m: 'Acrylic on unstretched canvas', alt: 'Unstretched canvas of a man in an all-green outfit, hat and sneakers leaning against a band of gold leaves on black.' },
    { a: 'siphamandla-ex', f: '08.jpg', w: 1200, h: 1600, t: 'Woman in Green', m: 'Acrylic on unstretched canvas', alt: 'Unstretched canvas of a woman in a green sweater, scarf, polka-dot tights and green handbag against black with gold leaves.' },
    { a: 'siphamandla-ex', f: '02.jpg', w: 995, h: 1346, t: 'Figure in Orange Sunglasses', m: 'Acrylic on canvas', alt: 'Painting of a dark-skinned figure in round orange sunglasses and a yellow top with black spots, gazing upward against black.' },
    { a: 'siphamandla-ex', f: '03.jpg', w: 988, h: 1349, t: 'Polka-Dot Turtleneck', m: 'Acrylic on canvas', alt: 'Painting of a figure in angular orange sunglasses, long red earrings and a yellow polka-dot turtleneck against black.' },
    { a: 'siphamandla-ex', f: '04.jpg', w: 1054, h: 1467, t: 'Profile with Orange Glasses', m: 'Acrylic on canvas', alt: 'Profile painting of a figure with orange glasses resting across the face and a round orange ear disc, against black.' },

    { a: 'steve-maphoso', f: '02.jpg', w: 1058, h: 1280, t: 'Crowned Woman in Blue', m: 'Mixed media', alt: 'Painting of a woman with a charcoal-rendered face in a belted royal-blue dress, framed by a scalloped oval and a small gold crown.' },
    { a: 'steve-maphoso', f: '01.jpg', w: 1036, h: 1600, t: 'Woman in Mustard Sweater', m: 'Mixed media', alt: 'Painting of a woman with a charcoal-rendered face standing hands-on-hips in a mustard sweater against flowered wallpaper.' },
    { a: 'steve-maphoso', f: '03.jpg', w: 1246, h: 1280, t: 'Two Women Among Flowers', m: 'Mixed media', alt: 'Painting of two women with voluminous afros and charcoal-rendered skin in purple slip dresses against a yellow floral background.' },

    { a: 'thamsanga', f: '01.jpg', w: 1280, h: 915, t: 'Two Youths on Burlap', m: 'Mixed media on burlap', alt: 'Mixed-media portrait on frayed burlap printed with clock motifs, showing two youths side by side in hats and jackets.' },
    { a: 'thamsanga', f: '05.jpg', w: 1280, h: 1011, t: 'Two Faces in Beanies', m: 'Scratchboard print', alt: 'Scratchboard-style print of two young faces in knitted beanies, one red and one blue, in fine scratched lines on black.' },
    { a: 'thamsanga', f: '02.jpg', w: 876, h: 1280, t: 'Boy with Gathered Flowers', m: 'Mixed media on found blanket', alt: 'Portrait painted on a found magenta floral blanket, showing a young man clutching a bundle of flowers over his shoulder.' },
    { a: 'thamsanga', f: '06.jpg', w: 1280, h: 807, t: 'Children Resting on Tyres', m: 'Scratchboard print', alt: 'Scratchboard-style scene of two children reclining among stacked tyres with a ball between them, on a deep black ground.' },
    { a: 'thamsanga', f: '03.jpg', w: 720, h: 1280, t: 'Child on a Paint Bucket', m: 'Mixed media on burlap', alt: 'Mixed-media work on burlap printed with pocket-watch motifs, depicting a smiling child seated on a dripping paint bucket.' },
    { a: 'thamsanga', f: '04.jpg', w: 846, h: 1280, t: 'Grinning Child in Hat', m: 'Hand-coloured linocut', alt: 'Hand-coloured linocut of a grinning child in a wide-brimmed hat seated on an upturned bucket, signed in pencil below.' },
    { a: 'thamsanga', f: '07.jpg', w: 1280, h: 719, t: 'Two Boys on Burlap', m: 'Mixed media on burlap', alt: 'Mixed-media double portrait on torn burlap, showing two boys side by side in caps and bright jackets.' },

    { a: 'ayanda-moyo', f: '01.jpg', w: 720, h: 743, t: 'Woman in Orange Headwrap', m: 'Charcoal & acrylic', alt: 'Painting of a young woman in an orange headscarf gazing left against a metallic gold background.' },
    { a: 'ayanda-moyo', f: '02.jpg', w: 720, h: 735, t: 'Golden Profile', m: 'Charcoal & acrylic', alt: 'Profile painting of a woman wearing an orange headscarf and gold hoop earring against a gold background.' }
  ];

  var grid = document.getElementById('masonry');
  var filterRow = document.getElementById('filters');
  if (!grid || !filterRow) return;

  /* ---------- render cards ---------- */
  var frag = document.createDocumentFragment();
  WORKS.forEach(function (w, i) {
    var artist = ARTISTS[w.a];
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'art-card';
    card.dataset.artist = w.a;
    card.dataset.index = String(i);
    card.setAttribute('aria-haspopup', 'dialog');
    card.innerHTML =
      '<figure>' +
        '<img src="assets/art/' + w.a + '/' + w.f + '" alt="' + w.alt.replace(/"/g, '&quot;') + '" ' +
          'width="' + w.w + '" height="' + w.h + '" loading="lazy" decoding="async">' +
        '<figcaption>' +
          '<span class="t">' + w.t + '</span>' +
          '<span class="a">' + artist.name + '</span>' +
          '<span class="m">' + w.m + '</span>' +
        '</figcaption>' +
      '</figure>';
    frag.appendChild(card);
  });
  grid.appendChild(frag);

  /* ---------- filters ---------- */
  var slugs = Object.keys(ARTISTS);
  var chipFrag = document.createDocumentFragment();
  function makeChip(label, value, pressed) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = label;
    b.dataset.filter = value;
    b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
    return b;
  }
  chipFrag.appendChild(makeChip('All Works', 'all', true));
  slugs.forEach(function (s) { chipFrag.appendChild(makeChip(ARTISTS[s].name, s, false)); });
  filterRow.appendChild(chipFrag);

  var note = document.getElementById('artist-note');
  filterRow.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    filterRow.querySelectorAll('.chip').forEach(function (c) {
      c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
    });
    var val = chip.dataset.filter;
    grid.querySelectorAll('.art-card').forEach(function (card) {
      card.classList.toggle('is-hidden', val !== 'all' && card.dataset.artist !== val);
    });
    if (note) {
      note.textContent = val === 'all' ? '' : ARTISTS[val].note;
      note.hidden = val === 'all';
    }
  });

  /* ---------- lightbox ---------- */
  var box = document.getElementById('lightbox');
  var boxImg = box.querySelector('.lightbox__stage img');
  var boxArtist = box.querySelector('.lightbox__panel .a');
  var boxTitle = box.querySelector('.lightbox__panel h2');
  var boxMeta = box.querySelector('.lightbox__panel .m');
  var boxDesc = box.querySelector('.lightbox__panel .desc');
  var boxCta = box.querySelector('.lightbox__panel .btn');
  var current = 0;

  function visibleIndices() {
    return Array.prototype.map.call(grid.querySelectorAll('.art-card:not(.is-hidden)'), function (c) {
      return Number(c.dataset.index);
    });
  }

  function show(i) {
    var w = WORKS[i];
    if (!w) return;
    current = i;
    var artist = ARTISTS[w.a];
    boxImg.src = 'assets/art/' + w.a + '/' + w.f;
    boxImg.alt = w.alt;
    boxArtist.textContent = artist.name;
    boxTitle.textContent = w.t;
    boxMeta.textContent = w.m;
    boxDesc.textContent = artist.note;
    boxCta.href = 'mailto:' + INQUIRY_EMAIL +
      '?subject=' + encodeURIComponent('Collector inquiry — "' + w.t + '" by ' + artist.name) +
      '&body=' + encodeURIComponent('Hello CUR8AFRICA,\n\nI would like to enquire about "' + w.t + '" by ' + artist.name + '.\n\n');
  }

  function step(dir) {
    var vis = visibleIndices();
    if (!vis.length) return;
    var pos = vis.indexOf(current);
    var next = vis[(pos + dir + vis.length) % vis.length];
    show(next);
  }

  grid.addEventListener('click', function (e) {
    var card = e.target.closest('.art-card');
    if (!card) return;
    show(Number(card.dataset.index));
    box.showModal();
  });

  box.addEventListener('click', function (e) {
    if (e.target.closest('.lightbox__close')) { box.close(); return; }
    if (e.target.closest('.lightbox__nav--prev')) { step(-1); return; }
    if (e.target.closest('.lightbox__nav--next')) { step(1); return; }
    var r = box.querySelector('.lightbox__inner').getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) box.close();
  });

  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });
})();
