// export default function getConfigApp() {
// //   return {
// //     client_id: "3eaR38Fp4NylY4tQVDu1BnIb9t8IqhsJ9z8AxSs3",
// //     client_secret:
// //       "VCru9VrZqaegGTNv936k807p86ABQ4dih4VfSPlNdNqWQSpTM9YLEOdQD9bHU1pG6T4zwVudA0qPUPq2Uh4ZjAYVyc7O8hJ5iZCO1iD4hgiJHYF1t9yrQIzZsCEjBm7W",
// //   };

// }
export function getConfigApp() {
  const data = new URLSearchParams();
  data.append("client_id", "FGMGZxEwIVdCML1KK3LkScDfUmBALxCzunXjmhPq");
  data.append(
    "client_secret",
    "nB3yYPTQb4N2B6xjNLRMrVXFfOd6Q7wkshziyQoFdHmc5Kjk4E2fGXgKuBPnnhTVnX4wdf3udlS8H5GiGWK2Ejd0o0TO0rqz1fScyGwhWjGwLcRo1X59kurULLHJUm9P"
  );
  return data;
}
