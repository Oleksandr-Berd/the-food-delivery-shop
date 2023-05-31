import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import { FidgetSpinner } from "react-loader-spinner";

const SharedLayout = () => {
    return (
      <>
        <Header />
        <Suspense
          fallback={
            <div>
              <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                backgroundColor="#F4442E"
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </>
    );
}
 
export default SharedLayout;