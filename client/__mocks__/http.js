const getLinkInfo = (url) => {
    return Promise.resolve({
        data: {
            name: 'Test Link',
        }
    })
}

exports.getLinkInfo = getLinkInfo;