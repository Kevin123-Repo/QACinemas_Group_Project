import { useEffect } from "react";

const ScreeningInfo=()=>{

    useEffect(() => {
        axios
            .get("qweqweqweqwqweqwe")
            .then((res) => res)
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data.data);
                // setRefresh(c=>!c);
                // console.log(result);

            },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // setRefresh(c => !c);
                }
            );
    }, [refresh]);


    return(
        <>
          

        </>
    )
}
export default ScreeningInfo;