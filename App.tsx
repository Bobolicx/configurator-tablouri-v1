import Header from './components/Header';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { useProject } from './store/useProject';

export default function App() {
  const step = useProject(s => s.step);
  const setStep = useProject(s => s.setStep);

  return (
    <>
      <Header />
      <main>
        <div className="step">
          {[1,2,3,4].map(n => (
            <button key={n} className={step === n ? 'active' : ''} onClick={() => setStep(n)}>
              Pasul {n}
            </button>
          ))}
        </div>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </main>
      <footer>
        Configurare orientativă. Execuția finală trebuie verificată de un electrician/proiectant autorizat conform I7.
      </footer>
    </>
  );
}
