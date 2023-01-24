import {Users} from "./components/Advanced";


const App = () => {

  return (
      <div>
          <Users/>
          {/*{userId ? <PostDetails userId={userId}/> : null}*/}
      </div>

  );
};

export default App;

// * Advanced
// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)