const baseUrl = "http://localhost:3001";

export function getMotivationalData() {
    return fetch(`${baseUrl}/api/motivations`)
        .then(res => res.json());
}

// export function getNumberOfMotivations() {
//     return fetch(`${baseUrl}/api/motivations/stats`).then(res => res.json());
// }