import projectOneImage from "../assets/UberLyft.png"
import projectTwoImage from "../assets/CarLogos.png"
import projectThreeImage from "../assets/AAMU.gif"
import projectFourImage from "../assets/Portfolio.png"

const projects = {
    1: {
        abbre: "Rideshare",
        title: "Uber vs Lyft Data Regression",
        image: projectOneImage,
        description: (
            <>
                <p className="description">
                    • Implemented and compared the accuracy of 
                    <span className="highlight"> Linear Regression </span>
                    and
                    <span className="highlight"> K-Nearest-Neighbors </span>
                    (KNN) models on a Rideshare Pricing Dataset.
                    <br/>
                    • Applied 
                    <span className="highlight"> Principal Component Analysis </span>
                    (PCA) to extract meaningful features
                    <br/>
                    • Manipulated and cleaned
                    <span className="highlight"> pandas </span>
                    data while documenting process of decisions with visual comparisons within a 
                    <span className="highlight"> Jupyter </span>
                    file using 
                    <span className="highlight"> Tensorflow </span>
                    and 
                    <span className="highlight"> Sklearn </span>
                    libraries.
                    <br/>
                </p>
            </>
        ),
        github: "https://github.com/rorosaya/Machine-Learning/blob/main/RideShare.ipynb"

    },
    2: {
        abbre: "Car Logos",
        title: "Car Logos Image Classification",
        image: projectTwoImage,
        description: (
            <>
                <p className="description">
                    • Utilized 
                    <span className="highlight"> Python </span>
                    to Implement and compare accuracy of 
                    <span className="highlight"> Logistic Regression </span>
                    and 
                    <span className="highlight"> KNN </span>
                    on an 
                    <span className="highlight"> Imaging Dataset </span>
                    <br/>
                    • Manipulated and 
                    <span className="highlight"> cleaned data </span>
                    while documenting process of decisions with visual comparisons within Jupiter File.
                    <br/>
                </p>
            </>
        ),
        github: "https://github.com/rorosaya/Machine-Learning/blob/main/Car_Logos.ipynb"
        
    },
    3: {
        abbre: "AAMU",
        title: "Affordable Atmospheric Monitoring Unit",
        image: projectThreeImage,
        description: (
            <>
                <p className="description">
                    • Programmed 
                    <span className="highlight"> Zybo </span>
                    board attached with 
                    <span className="highlight"> Digilent PMOD sensors </span>
                    in 
                    <span className="highlight"> C </span>
                    to monitor real-time atmospheric conditions.
                    <br/>
                    • Designed and 
                    <span className="highlight"> 3D printed </span>
                    enclosure in 
                    <span className="highlight"> AutoCad </span>
                    to house a portable battery, board, sensors, and wiring.
                </p>
            </>
        ),
        github: "https://github.com/BriannaSolano/Capstone"
        
    },
    4: {
        abbre: "Portfolio",
        title: "this.Portfolio!",
        image: projectFourImage,
        description: (
            <>
                <p className="description">
                    LOREM IPSUM
                </p>
            </>
        ),
        github: "https://github.com/rorosaya/react-portfolio"
        
    }
}

export default projects;