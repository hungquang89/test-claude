/**
 * Facebook Clone – Interactive JavaScript
 * Adds post creation, like/comment/share actions, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // === DOM References ===
  const createPostArea = document.querySelector('.create-post');

// Tồp thậm đãng lựi cho dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
  const postTextarea = document.querySelector('.post-textarea');
  const mainContent = document.querySelector('.main-content');

  // === Create New Post ===
  postTextarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const text = postTextarea.value.trim();
      if (!text) return;

      const newPost = buildPostDOM(text, 'You', new Date());
      // Insert new post right after the create-post area
      mainContent.insertBefore(newPost, createPostArea.nextSibling);
      postTextarea.value = '';
    }
  });

  // === Like / Unlike Toggle ===
  mainContent.addEventListener('click', (e) => {
    const btn = e.target.closest('.post-btn');
    if (!btn) return;

    const action = btn.textContent.trim().toLowerCase();

    if (action === 'like') {
      btn.classList.toggle('liked');
      if (btn.classList.contains('liked')) {
        btn.textContent = 'Unlike';
        btn.style.color = '#1877f2';
      } else {
        btn.textContent = 'Like';
        btn.style.color = '';
      }
    }
  });
});

/**
 * Builds a post element and returns it.
 *
 * @param {string} text       – Post content
 * @param {string} authorName – Author display name
 * @param {Date}   date       – When the post was created
 * @returns {HTMLElement}
 */
function buildPostDOM(text, authorName, date) {
  const post = document.createElement('div');
  post.className = 'post';

  const timeString = formatTime(date);

  post.innerHTML = `
    <div class="post-header">
      <div class="post-author">
        <img
          src="https://via.placeholder.com/40"
          alt="Author"
          class="post-author-avatar"
        />
        <div class="post-author-info">
          <div class="post-author-name">${escapeHTML(authorName)}</div>
          <div class="post-time">${timeString}</div>
        </div>
      </div>
    </div>
    <div class="post-content">
      <p>${escapeHTML(text)}</p>
    </div>
    <div class="post-actions">
      <button class="post-btn">Like</button>
      <button class="post-btn">Comment</button>
      <button class="post-btn">Share</button>
    </div>`;

  return post;
}

/**
 * Formats a Date object into a human‑readable relative string.
 *
 * @param  {Date} date
 * @return {string}
 */
function formatTime(date) {
  const diff = Date.now() - date.getTime();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}

/**
 * Simple HTML‑escape helper to prevent XSS when injecting user text.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}