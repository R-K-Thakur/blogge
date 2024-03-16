import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-ap-south-1.hygraph.com/v2/cltsdngsw0fq007w7v1pe2w4s/master'
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export const fetchData = async () => {
  const { posts } = await graphcms.request(QUERY);
  return posts;
};