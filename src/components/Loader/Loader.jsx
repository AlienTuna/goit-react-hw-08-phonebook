import { ThreeDots } from "react-loader-spinner";
import { LoaderOverlay } from "./Loader.styled";



export default function Loader() {
    return (
        <LoaderOverlay>

            <ThreeDots
                height="100"
                width="100"
                color="#fff96d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
            <p>Loading</p>
            <ThreeDots
                height="100"
                width="100"
                color="#fff96d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />

        </LoaderOverlay>
    )
}