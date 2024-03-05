const mockLinkInfoResponse = {
    name: 'Test Link',
    url: 'https://testlink.com',
    category: 'Test Category',
  };

export default {
    get:jest.fn().mockRejectedValue(mockLinkInfoResponse)
}