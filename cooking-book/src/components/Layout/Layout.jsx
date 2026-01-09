const Layout = (props) => {
    const { container, header } = props;
    return (
        <>
            {header}
            {container}
        </>
    )
}

export default Layout;