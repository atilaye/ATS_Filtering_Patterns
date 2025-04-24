function toggleExample(id) {
  const example = document.getElementById(id);
  if (example.classList.contains('hidden')) {
    example.classList.remove('hidden');
  } else {
    example.classList.add('hidden');
  }
}
