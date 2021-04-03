import React, {Component} from 'react';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import './app.css'

export default class App extends Component {
  
  constructor(props){
super(props);
this.state = {
allWords:["affenpinscher",
"whippet",
"african",
"irish wolfhound",
"pembroke",
"airedale",
"NEWFOUNDLAND",
"OTTERHOUND",
"PAPILLON",
"PEKINESE",
"SWISS MOUNTAIN",
"weimaraner",
"MINIATURE PINSCHER",
"akita",
"GERMAN POINTER",
"vizsla",
"POMERANIAN",
"appenzeller",
"MINIATURE POODLE",
"yorkshire terrier",
"STANDARD POODLE",
"basenji",
"BERNESE MOUNTAIN",
"wheaten terrier",
"TOY POODLE",
"beagle",
"MEXICANHAIRLESS",
"westhighland terrier",
"PUG",
"bluetick",
"TIBETAN MASTIFF",
"toy terrier",
"PYRENEES",
"borzoi",
"BULL MASTIFF",
"tibetan terrier",
"REDBONE",
"bouvier",
"MALTESE",
"silky terrier",
"CHESAPEAKE RETRIEVER",
"boxer",
"MALINOIS",
"sealyham terrier",
"CURLY RETRIEVER",
"brabancon",
"MALAMUTE",
"scottish terrier",
"FLATCOATED RETRIEVER",
"briard",
"LHASA",
"patterdale terrier",
"GOLDEN RETRIEVER",
"boston bulldog",
"LEONBERG",
"norwich terrier",
"RHODESIAN RIDGEBACK",
"french bulldog",
"LABRADOR",
"norfolk terrier",
"ROTTWEILER",
"staffordshire bullterrier",
"KUVASZ",
"lakeland terrier",
"SALUKI",
"cairn",
"KOMONDOR",
"kerryblue terrier",
"SAMOYED",
"chihuahua",
"KELPIE",
"irish terrier",
"SCHIPPERKE",
"chow",
"KEESHOND",
"fox terrier",
"GIANT SCHNAUZER",
"clumber",
"HUSKY",
"dandie terrier",
"MINIATURE SCHNAUZER",
"border collie",
"WALKER HOUND",
"border terrier",
"ENGLISH SETTER",
"coonhound",
"ENGLISH HOUND",
"bedlington terrier",
"GORDON SETTER",
"cardigan corgi",
"BLOOD HOUND",
"australian terrier",
"IRISH SETTER",
"dachshund",
"BASSET HOUND",
"american terrier",
"ENGLISH SHEEPDOG",
"great dane",
"AFGHAN HOUND",
"stbernard",
"SHETLAND SHEEPDOG",
"scottish deerhound",
"IBIZAN HOUND",
"english springer",
"SHIBA",
"dhole",
"GROENENDAEL",
"welsh spaniel",
"SHIHTZU",
"dingo",
"ITALIAN GREYHOUND",
"sussex spaniel",],
textToFilter:'',
filteringByButtons:'string',
isCheked:false,
    }
  }
  
/*componentDidMount(){
  fetch('http://localhost:3000/data')
  .then(res => res.json())
  .then(
      (notes) => {

          this.setState({
            allWords: notes,
              loading: false
          });

      },
      (error) => {
          this.setState({
            allWords: ['error loading contacts'],
              loading: false,

          });
      }
  )
}*/

onUpdateSearch = (textToFilter) => {
  this.setState({textToFilter})
};

onFilterSelect = (filteringByButtons) => {
  this.setState({filteringByButtons})
};
  


searchPost = (allWords, textToFilter) => {

   if(this.state.filteringByButtons === 'string' && this.state.isCheked=== true){
    return allWords.filter((post) => {
      return post.indexOf(textToFilter) > -1
    });
  }
  else if(this.state.filteringByButtons === 'string' && this.state.isCheked=== false){
    return allWords.filter((post) => {
      return post.toLowerCase().indexOf(textToFilter.toLowerCase()) > -1
    });
  }
    else if(this.state.filteringByButtons === 'length'){
      if(isNaN(Number(textToFilter))){
        return allWords.filter((post) => {
          return post
        });
      }
      else if(typeof(Number(textToFilter)) === 'number'){
        return allWords.filter((post) => {
          return post.length > textToFilter
        });
      }
    }
    return allWords.filter((post) => {
      return post.indexOf(textToFilter) > -1
    });

};

  render() {
    const {filteringByButtons, allWords, textToFilter} = this.state;

    const visiblePosts = this.searchPost(allWords, textToFilter);
    return(
      <div className='app'>
        <div className='search-panel d-flex'>
        <SearchPanel
       onUpdateSearch={this.onUpdateSearch}
       />
        <PostStatusFilter
        filter={filteringByButtons}
        onFilterSelect={this.onFilterSelect}
        />
        </div>
        <div class="form-check">
          <input className="form-check-input" type="checkbox" onClick={()=>this.setState({isCheked: !this.state.isCheked})} />
          <label className="form-check-label" htmlFor="defaultCheck1">
            С учетом регистра
          </label>
      </div>
        <PostList
        allWords={visiblePosts}/>
      </div>
    )
  }
} 