import NextLink from 'next/link'

export default function Link({ link, children, ...props }) {
    return (
        <NextLink href={link} {...props}>{children}</NextLink>
    )
}