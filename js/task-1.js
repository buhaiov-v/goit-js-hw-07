const allItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((item) => {
  const category = item.querySelector('h2').textContent; 
  const elements = item.querySelectorAll('li').length;

  console.log('Category:', category);
  console.log('Elements:', elements);
});