import React from "react";

function Jumbotron(props) {
    const styles = {backgroundColor: "#1F1F1F", color:"#fff", fontFamily: `"bitter", "serif"`}

return (
    <div style={styles} className="jumbotron text-center hoverable p-4">


        <div className="row">

            <div className="col-md-4 offset-md-1 mx-3 my-3">

                <div className="view overlay">
                    <img src="https://www.adn.com/resizer/bDTreAm41pz-gMRW7ehj1zAD5Yo=/1200x0/arc-anglerfish-arc2-prod-adn.s3.amazonaws.com/public/QYZNPCB4D5GTHNJLTBHLIRVTCM.jpg" className="img-fluid" alt="Sample image for first version of blog listing" />
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>

            </div>


            <div className="col-md-7 text-md-left ml-3 mt-3">


                {/* <a href="#!" className="green-text"> */}
                    {/* if we have time we could get it to link to the right section depending on the Hobby of the Day */}
                    {/* <h6 className="h6 pb-1"><i className="fas fa-desktop pr-1"></i> Baking </h6> */}
                {/* </a> */}

                <h4 className="h4 mb-4" style={{fontFamily: "arial", color: "#BF3A0D" , fontWeight: "bold"}}>Hobby of the Day</h4>

                <p className="font-weight-normal" style={{fontSize: "25px"}}>"I took up making Sourdough bread during the pandemic and now I'm a bread making machine. I created my own simple recipe and thought it was perfect to share."</p>
                <p className="font-weight-normal" style={{fontSize: "15px", fontFamily: "arial", color: "#E98A15"}}>Submitted by <a><strong>Carine Fox</strong></a>, 8/24/2020</p>
                <p className="font-weight-normal" style={{fontSize: "12px",  fontFamily: "arial"}}>Learn all of Carine's bread-making tips.</p>

                {/* <a className="btn btn-success">Read more</a> */}

            </div>


        </div>


    </div> )
}

export default Jumbotron;
