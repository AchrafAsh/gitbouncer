interface EmailProps {
    username: string
    invitee: string
    invitee_url: string
    repo_fullname: string
    repo_url: string
    action_url: string
}

export const inviteeNotification = ({
    username,
    invitee,
    invitee_url,
    repo_fullname,
    repo_url,
    action_url,
}: EmailProps) => `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
        <meta charset="utf-8" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
            name="format-detection"
            content="telephone=no, date=no, address=no, email=no"
        />
        <!--[if mso]>
            <noscript>
                <xml>
                    <o:OfficeDocumentSettings
                        xmlns:o="urn:schemas-microsoft-com:office:office"
                    >
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
            </noscript>
            <style>
                td,
                th,
                div,
                p,
                a,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: "Segoe UI", sans-serif;
                    mso-line-height-rule: exactly;
                }
            </style>
        <![endif]-->
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
            rel="stylesheet"
            media="screen"
        />
        <style>
            @media (max-width: 600px) {
                .button {
                    width: 100% !important;
                }

                .button {
                    text-align: center !important;
                }
            }

            @media (prefers-color-scheme: dark) {
                body,
                .email-body,
                .email-body_inner,
                .email-content,
                .email-wrapper,
                .email-masthead,
                .email-footer {
                    background-color: #333333 !important;
                }

                body,
                .email-body,
                .email-body_inner,
                .email-content,
                .email-wrapper,
                .email-masthead,
                .email-footer {
                    color: #ffffff !important;
                }

                p,
                ul,
                ol,
                blockquote,
                h1,
                h2,
                h3 {
                    color: #ffffff !important;
                }

                .email-masthead_name {
                    text-shadow: none !important;
                }
            }

            @media (max-width: 600px) {
                .sm-w-full {
                    width: 100% !important;
                }
            }
        </style>
    </head>

    <body
        style="
            margin: 0;
            width: 100%;
            padding: 0;
            word-break: break-word;
            -webkit-font-smoothing: antialiased;
        "
    >
        <div
            role="article"
            aria-roledescription="email"
            aria-label=""
            lang="en"
        >
            <table
                class="email-wrapper"
                style="
                    width: 100%;
                    font-family: JetBrains Mono, -apple-system, 'Segoe UI',
                        sans-serif;
                "
                cellpadding="0"
                cellspacing="0"
                role="presentation"
            >
                <tr>
                    <td align="center">
                        <table
                            class="email-content"
                            style="width: 100%"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                        >
                            <tr>
                                <td
                                    align="center"
                                    class="email-masthead"
                                    style="
                                        padding-top: 25px;
                                        padding-bottom: 25px;
                                        text-align: center;
                                        font-size: 16px;
                                    "
                                >
                                    <a
                                        href="https://gitbouncer.vercel.app"
                                        class="email-masthead_name"
                                        style="
                                            text-shadow: 0 1px 0 #ffffff;
                                            font-size: 16px;
                                            font-weight: 700;
                                            color: #a8aaaf;
                                            text-decoration: none;
                                        "
                                    >
                                        GitBouncer
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="email-body"
                                    style="
                                        width: 100%;
                                        background-color: #ffffff;
                                    "
                                >
                                    <table
                                        align="center"
                                        class="email-body_inner sm-w-full"
                                        style="
                                            margin-left: auto;
                                            margin-right: auto;
                                            width: 570px;
                                            background-color: #ffffff;
                                        "
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td style="padding: 45px">
                                                <div style="font-size: 16px">
                                                    <p
                                                        style="
                                                            margin-top: 6px;
                                                            margin-bottom: 20px;
                                                            font-size: 16px;
                                                            line-height: 24px;
                                                            color: #51545e;
                                                        "
                                                    >
                                                        Hey ${username},
                                                    </p>
                                                    <p
                                                        style="
                                                            margin-top: 6px;
                                                            margin-bottom: 20px;
                                                            font-size: 16px;
                                                            line-height: 24px;
                                                            color: #51545e;
                                                        "
                                                    >
                                                        <a
                                                            href="${invitee_url}"
                                                            >${invitee}</a
                                                        >
                                                        just joined
                                                        <a href="${repo_url}"
                                                            >${repo_fullname}</a
                                                        >.
                                                    </p>
                                                    <table
                                                        style="
                                                            margin-top: 25px;
                                                            border-top-width: 1px;
                                                            padding-top: 25px;
                                                            border-top-color: #eaeaec;
                                                            border-top-style: solid;
                                                        "
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                    >
                                                        <tr>
                                                            <td>
                                                                <p
                                                                    style="
                                                                        margin-top: 6px;
                                                                        margin-bottom: 20px;
                                                                        font-size: 13px;
                                                                        line-height: 24px;
                                                                        color: #51545e;
                                                                    "
                                                                >
                                                                    Don't want
                                                                    to let
                                                                    people in
                                                                    anymore?
                                                                    <a
                                                                        href="${action_url}"
                                                                    >
                                                                        Login to
                                                                        your
                                                                        account
                                                                    </a>
                                                                    and click
                                                                    the lock
                                                                    icon on the
                                                                    top right
                                                                    corner of
                                                                    the
                                                                    repository.
                                                                </p>
                                                                <p
                                                                    style="
                                                                        margin-top: 6px;
                                                                        margin-bottom: 20px;
                                                                        font-size: 13px;
                                                                        line-height: 24px;
                                                                        color: #51545e;
                                                                    "
                                                                >
                                                                    ${action_url}
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table
                                        align="center"
                                        class="email-footer sm-w-full"
                                        style="
                                            margin-left: auto;
                                            margin-right: auto;
                                            width: 570px;
                                            text-align: center;
                                        "
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td
                                                align="center"
                                                style="
                                                    padding: 45px;
                                                    font-size: 16px;
                                                "
                                            >
                                                <p
                                                    style="
                                                        margin-top: 6px;
                                                        margin-bottom: 20px;
                                                        text-align: center;
                                                        font-size: 13px;
                                                        line-height: 24px;
                                                        color: #a8aaaf;
                                                    "
                                                >
                                                    &copy; 2022 GitBouncer. All
                                                    rights reserved.
                                                </p>
                                                <p
                                                    style="
                                                        margin-top: 6px;
                                                        margin-bottom: 20px;
                                                        text-align: center;
                                                        font-size: 13px;
                                                        line-height: 24px;
                                                        color: #a8aaaf;
                                                    "
                                                >
                                                    GitBouncer
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>
`
