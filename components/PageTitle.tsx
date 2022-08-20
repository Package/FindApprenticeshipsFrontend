import Link from 'next/link';
import React, { FC } from 'react'

interface PageTitleProps {
    title: string;
    description: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title, description }) => {
    return (
        <div className="page-header">
            <div className="container">
                <h1 className="page-header--title">
                    <Link href="/">
                        {title}
                    </Link>
                </h1>
                <p className="page-header--description">
                    {description}
                </p>
            </div>
        </div>
    )
}
