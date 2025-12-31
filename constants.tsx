
import { Attraction } from './types';

export const FEATURED_CARDS: Attraction[] = [
  {
    id: 'f1',
    title: '上海隐秘花园 - 春日限定',
    description: '城市周边的静谧之地，春暖花开',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsjyO3r0SqdlbzO53dzSMjSJe9H4Hrvqf6j7CiplfpGWLtgMN-3ei3iBufuE9xxm3imlDxzG6iZTqzLyjJtbDgZYhBYWWB30Fg3hG-VwsRLHNqQ4v_cGjU1x43_H5jLWEQO6TZA9_81AzTptScwpbif8pa6I1UKSJPMhJZoi8cpF-t4EwVbhAl5RUm0G5E8rsIqvWd6-3YsCjTbrib1cp5R4Q_5sOGsVLeGD737rfZcyvSpZpQB81REeRCZA0K8MUZlfsemFACbw',
    price: 128,
    type: 'ticket',
    tags: ['限时特惠']
  },
  {
    id: 'f2',
    title: '莫奈光影艺术展',
    description: '沉浸式艺术体验，早鸟票开抢',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUUSLfjv1Yl8gvIbi5J0fpRUMQFiE2H2DF_hDZeNrxSUVHvS4zQzJLSLEDvyUr9NKFS9XoNuURRFjwQCyJzXDJrUIbQtxHtelw-KdhTmuNrfsCy1ZDVdqHBFctZ3RqoXRoInD3ekIdctxEdNFVU-Ehnf07dgpuyJsFwHy-tI5VsVt5q-IqnusC9_CCsD2FJdLjZzOdhA3lxEN6HJgLqn8WHEI_KtgYdMAksetdPBxaVhk4gcSv-NS-ZVkvXUWkxetusFXiuPnO6g',
    price: 88,
    type: 'ticket',
    tags: ['热门展览']
  },
  {
    id: 'f3',
    title: '星空露营嘉年华',
    description: '逃离城市喧嚣，享受自然',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOBmRDGfHwS0zIe3bZg_zFx3jXVcNdFNKlLEfMjzVYCIhWB70wPOyMWxGe3PouiRnN-d4FMU0PUD14MfETM_A79s00AQhLPi0rJOF_07bblriUNZtElAvUa0OtlTMq6LD1pFZFwS6Upfrqt9T9m60nVNn6Z_qo-ai_Saf-c9tP6jnqS-a-O1XHBUQu7CIGYR5KCQA3Fbcipe6UpNimgUkuB7vy8kuFj0c05UIiVGXysJh_BVDtB9aCqTJQ1Sk0ACwyQrnciW3yBQ',
    price: 299,
    type: 'ticket',
    tags: ['露营季']
  }
];

export const MASONRY_CARDS: Attraction[] = [
  {
    id: 'm1',
    title: '距市中心2小时，绝佳观星地✨',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOn_CK_EIsm96v053QQTdLHU36zufm-F7Qwh2ApOdlBhmqo_Emeg1gxQ-O8pFEjF9w2u5S0DzpKxCXHGhP4laorPq4op4PX0S3WD8evghzYEEuPw9Qye9hLOxmYKnACuR26Gz_SMwAFSdEq11nV_2jWE0n4SSnCsybs_YgBjNXIa3iLExRJVGmbJzkoYDFAwotnyc7MWZB9vYFnLNxHZV6i7pJHOHkGhcm_Em3InpbZN63hSii3n9i15mu4fNjcQUkjYLtBMfvmQ',
    author: { name: 'Alice', avatar: 'https://picsum.photos/100/100?random=1' },
    likes: '1.2k',
    type: 'ugc'
  },
  {
    id: 'm2',
    title: '当代艺术博物馆 - 早鸟票',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJmbMz1ukbtrNWgMN6qkdRAI6d2UMDZKdbwgb36pggKBbMJWAekP3jjBjL6OIfrQoFEH3U7vvrEmeWGZxnFmQSJhyCCmEOzRewa1lUKKCjclsWQnb3fsfU3_pFTNsXHSG8Fajx-IzNnfCZSuzKWXOKEC-bft_9vomrEXnhdCTgTE-R1WyL8e37T8tuICsUDEJ4MBEIA6D6Lg0DLDflejwAwzTCN2O4RdPEMgwyg3Hkp6SyF4kaJf9Flhl9ccaiMcHZUPOekCRQkQ',
    price: 88,
    location: '上海 · PSA',
    type: 'ticket'
  },
  {
    id: 'm3',
    title: '这家咖啡馆的日落绝了，一定要来！☕️🌇',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs-dhG-Xd6-_3wrY_fRofGT70TsQ8VFdF6RDvZ2Phi3qsaGiqPoJMVjeDVohPcpP8Gl7K7j8jrH5JP1FtJKfpFR-GCIAMbV0VFSTYEhHX1Nd_9QaDyXpuxz2h8h3-VewkOWypoB08GnChiTE5Y69esj1orOW6oWXIfLXneemw8cxVXYJf_HiUCzP90IVALlpLwVDAWEgeWZ1f20wHDZe6eUmx5QGn36g49uLdP9xMFdb29oL41LKLRQBslkZBKWH9mYF06J3FVvg',
    author: { name: 'Mike', avatar: 'https://picsum.photos/100/100?random=2' },
    likes: '800',
    type: 'ugc'
  },
  {
    id: 'm4',
    title: '周末亲子游好去处 👨‍👩‍👧',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2Lfrc4Q-YWaiInvFrHbyNrH6VSw02i6XQd5Mv_mkSdjuvWg8C-sVkfmeJVrIkryAhDbAVIgbCpnmwIiGLwrPIDpmCUoz1Ty9EJi0n_8aSr1sqjtRRZ2HLcGhVnwKnhXI2dR-sfgYbqQFO-EyTfLeKyHxYFNEFRwjWoKAhHgKJJIXR0COfSsFE0n3VvFCzvZNG24KGZ1llpiGr5zm3W1V8W5ebHm8mbtKqrVseFZh2ivL9mbZvuhRIAFxWDUGdvdeBDKjlQ5c9Dw',
    author: { name: '超级奶爸', avatar: 'https://picsum.photos/100/100?random=3' },
    likes: '2.5k',
    tags: ['亲子必去'],
    type: 'ugc'
  },
  {
    id: 'm5',
    title: '城郊徒步路线推荐，吸氧洗肺 🌲',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6qflkLLefXBQ9TPD2OLt93zui2lyJhLmJedYWNLZSQj_Me1rM7YzRJvmu1mpgzL6s4GpaElObxkD6Lo85Z_kp17gQk1B4yp8oafcUvp4rS1zQG5EOtZZV_9NpB-UI0QYUAcZsrUrTXEfOqx_wXmeelQHqjjuFENGPGLy8vVz6DVctjePQpdZ-VU9azNenDt9cur-dkfGfUybIpWhLIIqQDJWnXorpY3mzwP-4gy4ThBp0KWoIOe17nfQGKk9MaKu_k3JsNxqX0A',
    author: { name: '户外达人', avatar: 'https://picsum.photos/100/100?random=4' },
    likes: '300',
    location: '浙江 · 莫干山',
    type: 'ugc'
  },
  {
    id: 'm6',
    title: '老上海的City Walk，武康路随手拍 📷',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh4BjcPnLT5v0i517snyAx5Re85ypckmSOnM9aLxumxmtYBBdiBwYmHZyvRkeCRpzuBfY93MoAPQBTwGhs-5uPklreXHOC9Br-LaOCpBzPEj2CrWuJPcFmY2saCcRKUSarpOvrnEVYYImkp58AQSI1cDPcjJOESoMyhdd6dNI5JaRjaKFpMd3fijwT97dxDwt5Pt2mtyzNUzEf06s6RlaNMAnSrJmdjO13rShEvwHR5U34ak7frlGenH4a6avXwWdUAGr7TGRi7g',
    author: { name: '上海小囡', avatar: 'https://picsum.photos/100/100?random=5' },
    likes: '1.5k',
    type: 'ugc'
  }
];

export const CATEGORIES = ['推荐', '周边游', '亲子乐园', '艺术展', '露营', '网红打卡', '徒步'];
