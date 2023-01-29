const checkContainsClass = (element, className) => element.classList.contains(className);
const isEscapeKey = (evt) => evt.key === 'Escape';
export { checkContainsClass, isEscapeKey };
