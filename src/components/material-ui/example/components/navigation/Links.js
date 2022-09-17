import { Link } from "@mui/material"

export default () => {
    return (
        <>
            <h1>Links</h1>
            <Link href="#">Link</Link>
            <Link href="#" color="inherit">
                {'color="inherit"'}
            </Link>
            <Link href="#" variant="body2">
                {'variant="body2"'}
            </Link>
            <Link href="#" underline="none">
                {'underline="none"'}
            </Link>
            <Link href="#" underline="hover">
                {'underline="hover"'}
            </Link>
            <Link href="#" underline="always">
                {'underline="always"'}
            </Link>
        </>
    )
}