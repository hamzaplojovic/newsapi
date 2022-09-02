import { useLocation } from "react-router";
import { FullPageContent } from "./FullPageContent";
import { Layout } from "../../Layout/Layout";

export const Wrapper = () => {
    const { state }: any = useLocation();
    return (
        <Layout>
            <FullPageContent data={state.data} />
        </Layout>
    );
};

export default Wrapper;
