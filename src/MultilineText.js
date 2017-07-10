import React from 'react'
import ExternalLink from './ExternalLink'
import EmailLink from './EmailLink'

const renderText = (value, urls) => {
    if (!urls)
    {
        return value
    }

    let pattern = []
    for (let key in urls)
    {
        pattern.push('\\b' + key + '\\b')
    }

    let re = new RegExp('(' + pattern.join('|') + ')', 'g')
    let parts = value.split(re)

    for (let i = 0, max = parts.length; i < max; ++i)
    {
        let label = parts[i]
        let href = urls[label]
        if (undefined !== href)
        {
            parts[i] = (-1 === href.indexOf('@'))
                ? <ExternalLink key={'external-link-' + i} href={href} label={label} />
                : <EmailLink key={'link-' + i} address={href} label={label} />
        }
    }
    return parts
}

const renderDescription = (value, urls) => {
    if ('[object Array]' !== Object.prototype.toString.call(value))
    {
        value = [value]
    }
    return value.map((v, index) => {
        return (<span key={index}>{renderText(v, urls)}</span>);
    })
}

export default ({ description, urls=null }) => (
  <span>{renderDescription(description, urls)}</span>
)