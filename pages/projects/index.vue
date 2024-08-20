<template>
  <div class="max-w-7xl mx-auto">
    <div class="my-12" v-if="featuredProjects">
      <div>
        <Carousel :wrap-around="true" :autoplay="5000">
          <Slide
            v-for="project in featuredProjects"
            :key="project.id"
            class="px-4 pt-4 lg:px-6 lg:pt-6 lg:pb-2 bg-[#1b1b1b] rounded-2xl h-min"
          >
            <div class="w-full mb-4">
              <ProjectFeatureCard :key="project.id" :project="project" />
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <div>
      <div class="grid lg:grid-cols-[240px,1fr] gap-4">
        <div></div>
        <h1>Search Projects</h1>
        <div
          id="profile-info"
          class="bg-background-800 rounded-2xl relative h-min"
        >
          <div class="grid gap-4 p-4">
            <div>
              <h4>Types</h4>

              <ul>
                <li v-for="(type, key) in filters.type" :key="key">
                  <Checkbox
                    :id="`filter_type_${key}`"
                    :label="type.name"
                    v-model="type.value"
                    @input="updateFilteredProjects"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h4>Loaders</h4>
              <ul>
                <li v-for="(loader, key) in filters.loaders" :key="key">
                  <Checkbox
                    :id="`filter_loader_${key}`"
                    :label="loader.name"
                    v-model="loader.value"
                    @input="updateFilteredProjects"
                    :html="loader.slug === 'quilt' ? quiltIcon : ''"
                    :icon="
                      loader.slug === 'fabric'
                        ? 'file-icons:fabric'
                        : loader.slug === 'forge'
                        ? 'simple-icons:curseforge'
                        : loader.slug === 'neoforge'
                        ? 'game-icons:squirrel'
                        : ''
                    "
                  />
                </li>
              </ul>
            </div>
            <div>
              <h4>Categories</h4>
              <ul>
                <li v-for="(category, key) in filters.categories" :key="key">
                  <Checkbox
                    :id="`filter_category_${key}`"
                    :label="category.name"
                    v-model="category.value"
                    @input="updateFilteredProjects"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex justify-between items-center p-2 bg-background-800 rounded-xl"
          >
            <div class="max-w-96 w-full">
              <Input
                type="text"
                icon="fa6-solid:magnifying-glass"
                v-model="query"
                placeholder="Search"
                @input="updateFilteredProjects"
              />
            </div>
            <div>
              <Select
                v-model="order"
                :options="orderOptions"
                v-on:change="updateFilteredProjects"
              />
            </div>
          </div>
          <div class="grid gap-6 mt-4">
            <ProjectCard
              v-for="project in filteredProjects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import quiltIcon from "~/assets/images/icons/quilt_icon.svg?raw";
import Checkbox from "~/components/Checkbox.vue";
import ProjectFeatureCard from "~/components/ProjectFeatureCard.vue";

const order = ref("relevance");
const orderOptions = [
  { value: "relevance", name: "Relevance" },
  { value: "name", name: "Name" },
  { value: "downloads", name: "Downloads" },
  { value: "createdat", name: "Creation Date" },
];

const featuredProjects: Project[] | null = await getFeaturedProjects();
const categories: ProjectCategory[] = await getCategories();
const route = useRoute();
const router = useRouter();
const query = ref("");
const page = route.query.page ? parseInt(route.query.page as string) : 1;

type Filters = {
  type: Record<string, { name: string; slug: string; value: boolean }>;
  loaders: Record<string, { name: string; slug: string; value: boolean }>;
  categories: Record<string, { name: string; slug: string; value: boolean }>;
};

const filters: Ref<Filters> = ref({
  type: {
    modpacks: {
      name: "Modpacks",
      slug: "modpack",
      value: false,
    },
    mods: {
      name: "Mods",
      slug: "mod",
      value: false,
    },
    plugins: {
      name: "Plugins",
      slug: "plugin",
      value: false,
    },
  },
  loaders: {
    forge: {
      name: "Forge",
      slug: "forge",
      value: false,
    },
    fabric: {
      name: "Fabric",
      slug: "fabric",
      value: false,
    },
    neo_forge: {
      name: "NeoForge",
      slug: "neoforge",
      value: false,
    },
    quilt: {
      name: "Quilt",
      slug: "quilt",
      value: false,
    },
  },
  categories: categories.reduce((acc, category) => {
    acc[category.name] = {
      name: category.name,
      slug: category.slug,
      value: false,
    };
    return acc;
  }, {} as Record<string, { name: string; slug: string; value: boolean }>),
});

let filteredProjects = ref<Project[]>([]);

await updateFilteredProjects();

async function updateFilteredProjects() {
  const filteredCategories: string[] = Object.values(filters.value.categories)
    .filter((c) => c.value)
    .map((c) => c.slug);
  const filteredLoaders: string[] = Object.values(filters.value.loaders)
    .filter((t) => t.value)
    .map((t) => t.slug);
  const filteredTypes: string[] = Object.values(filters.value.type)
    .filter((t) => t.value)
    .map((t) => t.slug);

  filteredProjects.value = await getFilteredProjects(
    query.value,
    page,
    false,
    filteredCategories,
    filteredLoaders,
    filteredTypes,
    order.value
  );
}
</script>

<style>
.carousel__icon {
  color: white;
}

.carousel__pagination-button::after {
  background-color: gray;
  padding: 0.25rem 0.5rem;
  border-radius: 0.15rem;
}

.carousel__pagination-button:hover::after {
  background-color: lightgray;
}

.carousel__pagination-button--active::after {
  background-color: white !important;
}
</style>
