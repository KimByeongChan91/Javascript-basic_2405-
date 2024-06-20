import FormInput from './fromInput/FormInput';
import PillButton from './fromInput/PillButton';
import { MESSAGE } from './fromInput/message';

function App() {
  const FormInputComponents = [
    {
      InputProps: { placeholoder: MESSAGE.ID },
      Component: PillButton,
      ComponentProps: { content: '중복확인' },
    },
    {
      InputProps: { placeholoder: MESSAGE.PW },
    },
    {
      InputProps: { placeholoder: MESSAGE.PWCHECK },
    },
  ];

  return (
    <div className="App">
      {FormInputComponents.map((v) => (
        <FormInput {...v} />
      ))}
    </div>
  );
}

export default App;
