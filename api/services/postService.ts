import {
  CreatePostRequest,
  PostResponse,
  UpdatePostRequest,
  CommentResponse,
} from '@interfaces/index';
export class PostService {
  static list(): Cypress.Chainable<Cypress.Response<PostResponse[]>> {
    return cy.request<PostResponse[]>({
      method: 'GET',
      url: 'posts',
    });
  }

  static getById(id: number): Cypress.Chainable<Cypress.Response<PostResponse>> {
    return cy.request<PostResponse>({
      method: 'GET',
      url: `posts/${id}`,
    });
  }

  static getCommentsByPostId(id: number): Cypress.Chainable<Cypress.Response<CommentResponse[]>> {
    return cy.request<CommentResponse[]>({
      method: 'GET',
      url: `posts/${id}/comments`,
    });
  }

  static getCommentsByQuery(
    postId: number
  ): Cypress.Chainable<Cypress.Response<CommentResponse[]>> {
    return cy.request<CommentResponse[]>({
      method: 'GET',
      url: `comments?postId=${postId}`,
    });
  }

  static create(payload: CreatePostRequest): Cypress.Chainable<Cypress.Response<PostResponse>> {
    return cy.request<PostResponse>({
      method: 'POST',
      url: 'posts',
      body: payload,
    });
  }

  static update(
    id: number,
    payload: UpdatePostRequest
  ): Cypress.Chainable<Cypress.Response<PostResponse>> {
    return cy.request<PostResponse>({
      method: 'PUT',
      url: `posts/${id}`,
      body: payload,
    });
  }

  static patch(
    id: number,
    payload: Partial<UpdatePostRequest>
  ): Cypress.Chainable<Cypress.Response<PostResponse>> {
    return cy.request<PostResponse>({
      method: 'PATCH',
      url: `posts/${id}`,
      body: payload,
    });
  }

  static delete(id: number): Cypress.Chainable<Cypress.Response<void>> {
    return cy.request({
      method: 'DELETE',
      url: `posts/${id}`,
    });
  }
}
