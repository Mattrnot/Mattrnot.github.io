import styles from './NameSearch.module.css';
class HeaderName extends React.Component {

    getName() {
        let name = document.querySelector("#nameInput");
  
        fetch("/api/pokemon/name/" + name.value)
        .then((res) => { return res.json(); } )
        .then((processed) => {
          
          
          let resultElement = document.querySelector("#results");
    
          
          if(processed.error) {
            
            resultElement.innerHTML = "We can't find that Name!";
          } else {
  
            resultElement.innerHTML = processed.name +"'s ID is " + processed.id;
            
          }
    
        });
      }

      render() {
        return (
            <div className={styles.header}>
                <h2 className={styles.Name}>Search For Pokemon By Name:</h2>
                <input className={styles.INP} type="text" id="nameInput" placeholder="Name" />
                <br />
                <button className={styles.navlink} onClick={() => { this.getName() } }>SUBMIT</button>
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

export default HeaderName;