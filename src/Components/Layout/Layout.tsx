import { NavbarMinimal } from "../Navbar/Navbar";

export function Layout({
    children,
}: {
    children: React.ReactNode | React.ReactNode[];
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                width: "100%",
                alignItems: "center",
            }}
        >
            <NavbarMinimal />
            <div
                style={{
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                {children}
            </div>
        </div>
    );
}
