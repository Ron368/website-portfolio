// ===== Light / Dark Mode Toggle =====
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = 
      document.body.classList.contains('light-mode') ? '☀️' : '🌙';
  });

  // ===== Editable About Section =====
  const editButton = document.getElementById('edit-about');
  const aboutText = document.getElementById('about-text');

  let isEditing = false;

  editButton.addEventListener('click', () => {
    isEditing = !isEditing;
    aboutText.contentEditable = isEditing;
    aboutText.focus();
    editButton.textContent = isEditing ? '💾 Save' : '✏️ Edit';
  });