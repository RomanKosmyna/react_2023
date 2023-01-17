import './App.css';
import {SimpsonComponent} from "./Components/Simpson Component/simpsonCharacters";
import './Components/Simpson Component/simpsonStyle.css';
import './Components/Rick and Morty Component/rickStyle.css';

const App = () => {
    const characters = [
        {
            "id": 180,
            "name": "Jessica",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/180.jpeg"
        },
        {
            "id": 795,
            "name": "Palicki",
            "status": "Alive",
            "species": "Alien",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/795.jpeg"
        },
        {
            "id": 408,
            "name": "Quick Mystery Presenter",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/408.jpeg"
        },
        {
            "id": 580,
            "name": "Secret Service Snake",
            "status": "Alive",
            "species": "Animal",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/580.jpeg"
        },
        {
            "id": 316,
            "name": "Shmlona Shmlobinson",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/316.jpeg"
        },
        {
            "id": 458,
            "name": "Tax Attorney",
            "status": "unknown",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/458.jpeg"
        }
    ]
  return (
      <div className={'mainContainer'}>
          <div className={"simpsonContainer"}>
              {/*---------1----------*/}
              <SimpsonComponent
                  name={'Homer Simpson'}
                  img={'https://th.bing.com/th/id/OIP.eOjbyU6nZJSq1pM2nGpXEQHaJI?w=177&h=218&c=7&r=0&o=5&pid=1.7'}
                  desc={'Homer Jay Simpson is the bumbling husband of Marge, and father to Bart, Lisa and Maggie' +
                      ' Simpson. He is the son of Mona and Abraham "Grampa" Simpson. Homer held over 188 different jobs' +
                      ' in the first 400 episodes of The Simpsons.'}
              />
              {/*---------2----------*/}
              <SimpsonComponent
                  name={'Marge Simpson'}
                  img={'https://th.bing.com/th/id/OIP.2adqZ1RNW32CN_KHjf3vLwHaJQ?w=198&h=248&c=7&r=0&o=5&pid=1.7'}
                  desc={'Matt Groening first conceived Marge and the rest of the Simpson family in 1987 in the lobby of producer ' +
                      'James L. Brooks\' office. Groening had been called to pitch a series of animated shorts for The' +
                      ' Tracey Ullman Show, and had intended to present an adaptation of his Life in Hell comic strip.'}
              />
              {/*----------3---------*/}
              <SimpsonComponent
                  name={'Lisa Simpson'}
                  img={'https://th.bing.com/th/id/OIP.sLEvgHZ8Kjm7SlL_pLxZsQHaHk?w=198&h=202&c=7&r=0&o=5&pid=1.7'}
                  desc={'Lisa, despite being a child prodigy, often sees herself as a misfit within the Simpson family and other ' +
                      'children due to possessing an unusually high level of intelligence. She shows characteristics rarely seen in Springfield, ' +
                      'including spirituality and commitment to peaceful ways, and is notably more concerned with world' +
                      ' affairs than her life in Springfield.'}
              />
              {/*---------4----------*/}
              <SimpsonComponent
                  name={'Maggie Simpson'}
                  img={'https://th.bing.com/th/id/OIP.YJq2KaNCNKeyfyoaaUG9kAHaHK?w=213&h=205&c=7&r=0&o=5&pid=1.7'}
                  desc={'Maggie is the youngest child of Homer and Marge, and the younger sister to Bart and Lisa. ' +
                      'She is often seen sucking on her orange pacifier and, when she walks, she trips over her clothing and ' +
                      'falls on her face (this running gag is used much more in earlier seasons). Being an infant, she has not yet learned how to talk.'}
              />
              {/*---------5----------*/}
              <SimpsonComponent
                  name={'Bart Simpson'}
                  img={'https://th.bing.com/th/id/OIP.f1oim1r9QM6MayvwbKnl5AHaJP?w=198&h=248&c=7&r=0&o=5&pid=1.7'}
                  desc={'Bart\'s character traits of rebelliousness and disrespect for authority have been compared to that' +
                      ' of America\'s founding fathers, ' +
                      'and he has been described as an updated version of Tom Sawyer and Huckleberry Finn, rolled into one. In his book Planet Simpson, ' +
                      'Chris Turner describes Bart as a nihilist, a philosophical position that argues that existence is without objective meaning, purpose, or intrinsic value.'}
              />
          </div>
          <div className={'rickAndMortyContainer'}>
              {
                  characters.map((character) => {
                      return <div key={character.id} className={'rickCharacterBlock'}>
                          <h2>{character.name}</h2>
                          <h3><span className={'id'}>ID</span> - {character.id}</h3>
                          <p><span className={'status'}>{character.status}</span> - {character.species}, {character.gender}</p>
                          <img src={character.image} alt=""/></div>
                  })
              }
          </div>
      </div>

  );
}

export default App;