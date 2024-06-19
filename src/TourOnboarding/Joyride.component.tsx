import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Joyride, { Step } from 'react-joyride';


const steps: Step[] = [
  {
    target: '.star-burst',
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 20,
    content: <h4>Novidade. Agora e possivel fazer o donwload na tela do na-rua</h4>,
  }
];

export function JoyrideComponent() {

  const [run, setRun] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Starting tour');
      setRun(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (

    <Joyride
      callback={() => { }}
      continuous
      run={run}
      scrollToFirstStep
      // showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
      locale={{
        back: 'Voltar',
        close: 'Fechar',
        last: 'Fechar',
        next: 'Próximo',
        skip: 'Pular',
      }}
    />
  );

}

