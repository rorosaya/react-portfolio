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
                    LOREM IPSUM
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
                    LOREM IPSUM
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
                    LOREM IPSUM
                </p>
            </>
        ),
        github: "https://github.com/BriannaSolano/Capstone"
        
    },
    4: {
        abbre: "Portfolio",
        title: "This.Portfolio!",
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