import { Injectable } from '@angular/core';

const domain = "https://result.school";

export enum ProductsType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductsType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  }
}

export const products: IProduct[] = [
  {
    id:'29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Course for beginners about basics, classes, compilers, generics, utils, decorators etc.',
    time: '2 weeks expririance',
    type: ProductsType.Skill
  },
  {
    id:'30',
    title: 'Git & Github',
    link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'BLD, histories of versions, remote repos, relieses, opensource etc.',
    time: '2 weeks expririance',
    type: ProductsType.Skill
  },
  {
    id:'910',
    title: 'Redux, RTK & MobX',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'Redux, RTK, Redux DevTools, RTK Query, MobX',
    time: '2 weeks expririance',
    type: ProductsType.Skill
  },
  {
    id:'29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Course for beginners about basics, classes, compilers, generics, utils, decorators etc.',
    time: '2 weeks expririance',
    type: ProductsType.Intensive
  },
  {
    id:'30',
    title: 'Git & Github',
    link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'BLD, histories of versions, remote repos, relieses, opensource etc.',
    time: '2 weeks expririance',
    type: ProductsType.Intensive
  },
  {
    id:'910',
    title: 'Redux, RTK & MobX',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'Redux, RTK, Redux DevTools, RTK Query, MobX',
    time: '2 weeks expririance',
    type: ProductsType.Intensive
  },
  {
    id:'29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Course for beginners about basics, classes, compilers, generics, utils, decorators etc.',
    time: '2 weeks expririance',
    type: ProductsType.Course
  },
  {
    id:'30',
    title: 'Git & Github',
    link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'BLD, histories of versions, remote repos, relieses, opensource etc.',
    time: '2 weeks expririance',
    type: ProductsType.Course
  },
  {
    id:'910',
    title: 'Redux, RTK & MobX',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'Redux, RTK, Redux DevTools, RTK Query, MobX',
    time: '2 weeks expririance',
    type: ProductsType.Course
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find(e=>e.id === id)
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if(!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group
    }, {})
  }
}
