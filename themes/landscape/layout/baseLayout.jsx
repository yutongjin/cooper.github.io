import React from 'react';
import Debug from './components/debug';
import Navigate from './components/navigate';

export default (Component) => (props) => {

    const { page, config, css, env, site } = props;
    const View = Component;
    const title = page.title || config.title;

    return (
        <html>
            <head>
                <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
                <meta content='width=device-width, initial-scale=1.0' name='viewport' />
                <title>{title}</title>
                <div dangerouslySetInnerHTML={{ __html: css('css/index.css') }} />
            </head>
            <body>
                <Navigate list={site.data.menu} />
                <div className='main'>
                    <View {...props} />
                </div>

                {env.debug && env.env === 'development' &&
                    <Debug {...props} />
                }
            </body>
        </html>
    );
}