import { useParams } from "react-router-dom";
import { FullPageData } from "../../../context/full";
import { FullPageContent } from "./FullPageContent";

export const Wrapper = () => {
    const title: any = useParams().id;
    const { data }: any = FullPageData({
        title: title,
    });

    return <FullPageContent data={data} />;
};

export default Wrapper;
