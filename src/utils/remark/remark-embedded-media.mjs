import { visit } from "unist-util-visit";

/**
 * A remark plugin that converts custom directives to embedded media HTML elements
 * Supports: link cards, Spotify, YouTube, Bilibili, X posts, and GitHub repository cards
 */
const embedHandlers = {
	/* 	// Link Card
	link: node => {
		const url = node.attributes?.url;
		if (!url) {
			return false;
		}

		// Create the LinkCard HTML structure - all metadata will be fetched by JavaScript
		return `
      <div class="link-card-wrapper">
        <a href="${url}" class="link-card" target="_blank" rel="noopener noreferrer" data-url="${url}">
          <div class="link-card-content">
            <div class="link-card-url"></div>
            <p class="link-card-title" style="display: none;"></p>
            <p class="link-card-description" style="display: none;"></p>
          </div>
          <div class="link-card-image-outer">
            <div class="link-card-image" style="display: none;">
              <img src="" alt="" loading="lazy" />
            </div>
          </div>
        </a>
      </div>
    `;
	},
 */
	// Spotify
	spotify: node => {
		const url = node.attributes?.url ?? "";
		if (!url) {
			return false;
		}
		if (!/^https:\/\/open\.spotify\.com\//.test(url)) {
			return false;
		}
		let embedUrl = url.replace("open.spotify.com/", "open.spotify.com/embed/");
		if (!embedUrl.includes("utm_source=")) {
			embedUrl += (embedUrl.includes("?") ? "&" : "?") + "utm_source=generator";
		}

		let height = "152";
		if (url.includes("/album/") || url.includes("/playlist/") || url.includes("/artist/") || url.includes("/show/")) {
			height = "453";
		}

		return `
    <figure>
      <iframe
        style="border-radius:0.5rem"
        src="${embedUrl}"
        width="100%"
        height="${height}"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </figure>
    `;
	},

	// Youtube
	youtube: node => {
		let videoId = node.attributes?.id ?? "";
		const url = node.attributes?.url ?? "";

		if (!videoId && url) {
			const match = url.match(/(?:v=|\/embed\/|youtu\.be\/)([\w-]{11})/);
			if (match) videoId = match[1];
		}

		if (!videoId) {
			return false;
		}

		return `
      <iframe
        style="border-radius:0.5rem"
        src="https://www.youtube.com/embed/${videoId}"
        title="YouTube video player"
	width="100%"
	height="480"
        loading="lazy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
    `;
	},

	// Bilibili
	bilibili: node => {
		let bvid = node.attributes?.id ?? "";
		const url = node.attributes?.url ?? "";
		if (!bvid && url) {
			const match = url.match(/\/BV([\w]+)/);
			if (match) bvid = "BV" + match[1];
		}
		if (!bvid) {
			return false;
		}

		return `
      <iframe
        style="border-radius:0.5rem"
        src="//player.bilibili.com/player.html?isOutside=true&bvid=${bvid}&p=1&autoplay=0&muted=0"
	width="100%"
	height="480"
        title="Bilibili video player"
        loading="lazy"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      ></iframe>
    `;
	},
	/* 
	// X Post Card
	x: node => {
		const xUrl = node.attributes?.url ?? "";
		if (!xUrl) {
			return false;
		}

		const twitterUrl = xUrl.replace(/(\w+:\/\/)?x\.com\//g, "$1twitter.com/");
		const uniqueId = `x-card-${Math.random().toString(36).slice(2, 11)}`;

		return `
    <figure class="x-card">
      <blockquote class="twitter-tweet" data-dnt="true" id="${uniqueId}">
        <a href="${twitterUrl}"></a>
      </blockquote>
    </figure>
    `;
	},
 */
	github: node => {
		const repo = node.attributes?.repo ?? "";
		if (!repo || !repo.includes("/")) {
			return `<div class="hidden">Invalid repository ("owner/repo" required)</div>`;
		}

		const cardId = `gc-id-${Math.random().toString(36).slice(-6)}`;

		return `
<a id="${cardId}-card"
   class="card-github fetch-waiting"
   href="https://github.com/${repo}"
   target="_blank"
   repo="${repo}"
>
  <div class="gc-titlebar">
    <div class="gc-titlebar-left">
      <div class="gc-owner">
        <div id="${cardId}-avatar" class="gc-avatar"></div>
        <div class="gc-user">${repo.split("/")[0]}</div>
      </div>
      <div class="gc-divider">/</div>
      <div class="gc-repo">${repo.split("/")[1]}</div>
    </div>
    <div class="github-logo"></div>
  </div>

  <div id="${cardId}-description" class="gc-description">Description not set.</div>

  <div class="gc-infobar">
    <div id="${cardId}-stars"   class="gc-stars">Loading</div>
    <div id="${cardId}-forks"   class="gc-forks">Loading</div>
    <div id="${cardId}-license" class="gc-license">Loading</div>
    <span id="${cardId}-language" class="gc-language">Loading</span>
  </div>

  <script id="${cardId}-script" type="text/javascript" defer>
    fetch('https://api.github.com/repos/${repo}', { referrerPolicy: "no-referrer" })
      .then(r => r.json())
      .then(data => {
        if (data.description)
          document.getElementById('${cardId}-description').innerText =
            data.description.replace(/:[a-zA-Z0-9_]+:/g, '');

        document.getElementById('${cardId}-language').innerText =
          data.language || 'unknown';

        document.getElementById('${cardId}-forks').innerText =
          Intl.NumberFormat('en-us',{notation:"compact",maximumFractionDigits:1})
            .format(data.forks)
            .replaceAll("\\u202f","");

        document.getElementById('${cardId}-stars').innerText =
          Intl.NumberFormat('en-us',{notation:"compact",maximumFractionDigits:1})
            .format(data.stargazers_count)
            .replaceAll("\\u202f","");

        const avatarEl = document.getElementById('${cardId}-avatar');
        avatarEl.style.backgroundImage = 'url(' + data.owner.avatar_url + ')';
        avatarEl.style.backgroundColor = 'transparent';

        document.getElementById('${cardId}-license').innerText =
          data.license?.spdx_id || 'unknown';

        document.getElementById('${cardId}-card').classList.remove("fetch-waiting");
      })
      .catch(err => {
        console.warn("[GITHUB-CARD] failed:", err);
        document.getElementById('${cardId}-card').classList.add("fetch-error");
      });
  </script>
</a>
`;
	}
};

export default function remarkEmbeddedMedia() {
	return tree => {
		visit(tree, ["leafDirective", "containerDirective", "textDirective"], node => {
			const handler = embedHandlers[node.name];
			if (!handler) {
				return;
			}

			const htmlContent = handler(node);
			if (!htmlContent) {
				return;
			}

			node.type = "html";
			node.value = htmlContent;
			delete node.name;
			delete node.attributes;
			delete node.children;
		});
	};
}
