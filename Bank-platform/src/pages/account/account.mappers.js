export const mapAccountFromApiToViewModel = (account) =>{
    return {
        id:account.id,
        type: account.type,
        alias: account.name,
    }
}

export const mapAccountFromViewModelToApi = account => {
    return {
        id:account.id,
        type: account.type,
        name: account.alias,
    }
}