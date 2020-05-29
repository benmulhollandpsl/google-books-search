import React, { Component } from "react";
import "./App.css";
import { Input, SearchArea } from "./Grid";
import API from "./API";


//where Search field will appear
class Search extends Component {
    state = {
        search:"",
        books:[]
    };
  
      componentDidMount = (event) => {
          this.getBooks();
      }
      
      getBooks = () => {
        API.setResults()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err));
    };
    //   const [books, setState] = useState("");
    //   const [result, setResult] = useState([]);
    //   const [apiKey, setApiKey] = useState("AIzaSyDacCrRbdlrbik-iyxN9QAdMjH7-wALY08");
      


    handleSearchSubmit = event => {
        event.preventDefault();
        API.getGoogleBooksKey(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    this.setState({ books: results, error: "" })
                }
            })
    }



    //   handleChange = (event) => { 
                // console.log(event)       
    //     const book = event.target.value;
  
    //     setBook(book);
    //   }
      
    //   handleSubmit = (event) => {
    //       event.preventDefault();
    //       console.log(book)
  
    //   }
    
      
    render() {
      return (
          <div>
       <div className="App">
           <div className="App-header">
            
            <h2>GoogleBooks React</h2>
          </div>
         
        
  
  
      <div class="container">
        <form>
        {/* <div class="form-group">
        <input type="text" 
          className="input-control mt-10" 
          placeholder="book search" 
          autoComplete="off"/>
        </div> */}
        <form>
            <Input name="title" placeholder="Title" />
            <Input name="author" placeholder="Author" />
            <SearchArea name="about" placeholder="about" />
            <button type="submit" className="btn btn-danger">Search</button>
        </form>

                    {/* <Row>
                        <Col size="12">
                    componentDidMount={this.componentDidMount}
                    
                        </Col>
                    </Row> */}
        </form>
        </div>
        </div>
        </div>
      );

    }
  }
  
  export default Search;
  