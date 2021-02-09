export const getAllBooks = async (): Promise<BookType[]> => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};

export const getBook = async ({ queryKey }: any): Promise<BookType> => {
  /* esling disable no used vars*/
  const [_key, { id }] = queryKey;

  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`
  );

  if (!response.ok) {
    throw new Error((response.json() as any)?.message);
  }

  return response.json();
};

export const updateBook = async ({
  id,
  ...data
}: BookType): Promise<BookType> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error((response.json() as any)?.message);
  }

  return response.json();
};

export const removeBook = async (id: string): Promise<Boolean | any> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error((response.json() as any)?.message);
  }

  return true;
};

export const createBook = async (data: BookType) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error((response.json() as any)?.message);
  }

  return response.json();
};
