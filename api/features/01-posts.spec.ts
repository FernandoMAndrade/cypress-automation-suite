import { PostService } from '../services/postService';
import {
  CreatePostRequest,
  UpdatePostRequest,
  PostResponse,
  CommentResponse,
} from '@interfaces/index';

describe('Asserts the CRUD operations for posts using jsonplaceholder public API', () => {
  it('should retrieve all posts', { tags: ['@smoke', '@regression'] }, () => {
    PostService.list().should((response) => {
      expect(response.status).to.eq(200);
      const posts = response.body;
      expect(posts).to.be.an('array');
      expect(posts.length).to.be.greaterThan(0);
    });
  });

  it('should retrieve a post by its ID', { tags: ['@smoke', '@regression'] }, () => {
    const postId = 1;
    PostService.getById(postId).should((response) => {
      expect(response.status).to.eq(200);
      const post: PostResponse = response.body;
      expect(post).to.have.property('id', postId);
      expect(post).to.have.property('title');
      expect(post).to.have.property('body');
      expect(post).to.have.property('userId');
    });
  });

  it('should retrieve post comments via /posts/:id/comments', { tags: ['@regression'] }, () => {
    const postId = 1;
    PostService.getCommentsByPostId(postId).should((response) => {
      expect(response.status).to.eq(200);
      const comments: CommentResponse[] = response.body;
      expect(comments).to.be.an('array');
      if (comments.length) {
        expect(comments[0]).to.have.property('postId', postId);
      }
    });
  });

  it('should retrieve post comments via /comments?postId=:id', { tags: ['@regression'] }, () => {
    const postId = 1;
    PostService.getCommentsByQuery(postId).should((response) => {
      expect(response.status).to.eq(200);
      const comments: CommentResponse[] = response.body;
      expect(comments).to.be.an('array');
      if (comments.length) {
        expect(comments[0]).to.have.property('postId', postId);
      }
    });
  });

  it('should create a new post successfully', { tags: ['@smoke', '@regression'] }, () => {
    const payload: CreatePostRequest = {
      title: 'Test Title - Creation',
      body: 'This post is created for testing purposes',
      userId: 1,
    };

    PostService.create(payload).should((response) => {
      expect(response.status).to.eq(201);
      const newPost: PostResponse = response.body;
      expect(newPost).to.have.property('id');
      expect(newPost.title).to.equal(payload.title);
      expect(newPost.body).to.equal(payload.body);
      expect(newPost.userId).to.equal(payload.userId);
    });
  });

  it('should update an existing post completely using PUT', { tags: ['@regression'] }, () => {
    const postId = 1;
    const updatePayload: UpdatePostRequest = {
      title: 'Updated Title - PUT',
      body: 'Updated content using PUT',
    };

    PostService.update(postId, updatePayload).should((response) => {
      expect(response.status).to.eq(200);
      const updatedPost: PostResponse = response.body;
      expect(updatedPost.title).to.equal(updatePayload.title);
      expect(updatedPost.body).to.equal(updatePayload.body);
    });
  });

  it('should partially update an existing post using PATCH', { tags: ['@regression'] }, () => {
    const postId = 1;
    const patchPayload: Partial<UpdatePostRequest> = {
      title: 'Updated Title Partially - PATCH',
    };

    PostService.patch(postId, patchPayload).should((response) => {
      expect(response.status).to.eq(200);
      const patchedPost: PostResponse = response.body;
      expect(patchedPost.title).to.equal(patchPayload.title);
    });
  });

  it('should delete a post successfully', { tags: ['@regression'] }, () => {
    const payload: CreatePostRequest = {
      title: 'Post to Delete',
      body: 'This post will be deleted during the test',
      userId: 1,
    };

    PostService.create(payload)
      .should((createResponse) => {
        expect(createResponse.status).to.eq(201);
        return createResponse.body;
      })
      .then((createdPost) => {
        PostService.delete(createdPost.body.id).should((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
        });
      });
  });
});
