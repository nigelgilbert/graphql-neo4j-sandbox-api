const schema = `
  enum _TagOrdering {
    name_asc
    name_desc
    _id_asc
    _id_desc
  }
  
  enum _SessionOrdering {
    name_asc
    name_desc
    about_asc
    about_desc
    date_asc
    date_desc
    _id_asc
    _id_desc
  }

  type Tag {
    name: String!
    _id: String
  }

  type Session {
    name: String!
    about: String
    date: Int
    tags(first: Int, offset: Int, orderBy: [_TagOrdering]): [Tag]
    _id: String
  }

  type Query {
    Session(
      name: String
      about: String
      date: Int
      _id: String
      first: Int
      offset: Int
      orderBy: [_SessionOrdering]
    ): [Session]
  }
`;

export default schema;