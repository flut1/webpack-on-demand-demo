import demand1 from './demand1?on-demand';
import demand2 from './demand2?on-demand';
import demand3 from './demand3?on-demand';
import demand4 from './demand4?on-demand';

const demandModules = [
  demand1,
  demand2,
  demand3,
  demand4,
];

demandModules.forEach((getModule, index) => {
  const button = document.querySelector(`#trigger-demand-${index + 1}`);
  button.addEventListener('click', () => {
    const resultEl = document.querySelector(`#result-demand-${index + 1}`);
    resultEl.innerText = 'compiling...';
    getModule().then(module => {
      resultEl.innerText = JSON.stringify(module);
    });
  });
});
