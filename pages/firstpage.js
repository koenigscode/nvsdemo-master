import Link from 'next/link';

function FirstPage() {

    const styles = {
        container: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        },
    }

    return (
        <div style={styles.container}>

            <p>This is our first React/Next.js page</p>

            <br />

            <Link href="/demo">
                <a>Visit Demo</a>
            </Link>

        </div>
    )
}

export default FirstPage;