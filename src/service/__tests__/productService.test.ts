import { productService, IProduct } from '../productService';

// Mock da instância `api` usada pelo productService
jest.mock('../api', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() },
    },
  },
}));

// Importa o mock depois de fazer o jest.mock
import api from '../api';

const mockedApi = api as jest.Mocked<typeof api>;

describe('productService (unitário)', () => {
  const mockProduct: IProduct = {
    id: '1',
    name: 'Produto Teste',
    description: 'Descrição do produto',
    price: 10,
    image: 'produto.jpg',
    tags: [{ label: 'Face', type: 'face' }],
  };

  beforeEach(() => {
    mockedApi.get.mockReset();
  });

  it('deve retornar a lista de produtos com sucesso', async () => {
    mockedApi.get.mockResolvedValueOnce({ data: [mockProduct] });

    const result = await productService.getProducts();

    expect(mockedApi.get).toHaveBeenCalledWith('/products');
    expect(result).toEqual([mockProduct]);
  });

  it('deve retornar um produto pelo ID', async () => {
    mockedApi.get.mockResolvedValueOnce({ data: mockProduct });

    const result = await productService.getProductById('1');

    expect(mockedApi.get).toHaveBeenCalledWith('/products/1');
    expect(result).toEqual(mockProduct);
  });
});