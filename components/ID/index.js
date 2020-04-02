import styles from './IdSearch.module.css';
class Header extends React.Component {

    getId() {
        let id = document.querySelector("#idInput");
  
        fetch("/api/pokemon/id/" + id.value)
        .then((res) => { return res.json(); } )
        .then((processed) => {
          
          
          let resultElement = document.querySelector("#results");
    
          
          if(processed.error) {
            
            resultElement.innerHTML = "We can't find that ID!";
          } else {
  
            resultElement.innerHTML = "The Pokemon with that ID is " + processed.name;
          
          }
    
        });
      }

      render() {
        return (
            <div className={styles.header}>
                <h2 className={styles.Name}>Search For Pokemon By ID:</h2>
                <input className={styles.INP} type="text" id="idInput" placeholder="ID" />
                <br />
                <button className={styles.navlink} onClick={() => { this.getId() } }>SUBMIT</button>
                <br />
                <div className={styles.results}>
                    <h2 className={styles.h2}>RESULTS:</h2>
                    <hr className={styles.hr} />
                    <br />
                    <div id="results"></div>
                </div>
            </div>
            
        );
      }
    
    }

export default Header;